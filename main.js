import Point from 'ol/geom/Point';
import * as ol from 'ol';
import OSM from 'ol/source/OSM';
import sVector from 'ol/source/Vector';
import lVector from 'ol/layer/Vector';
import {FullScreen, defaults as defaultControls} from 'ol/control';
import { fromLonLat } from 'ol/proj';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {Icon, Style} from 'ol/style';
import features from './features'


var iconStyle = new Style({
  image: new Icon( /** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 18],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'https://www.dropbox.com/s/fx852dq393bwjj3/icon.png?dl=1'
  }))
});

features.icons.forEach(element => {
    element.setStyle(iconStyle)
});

var vectorSource = new sVector({
  features: features.icons
});

var vectorLayer = new lVector({
  source: vectorSource
});

var map = new ol.Map({
  /*controls: defaultControls().extend([new FullScreen()]),*/
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer
  ],
  target: 'map',
  view: new ol.View({
    center: fromLonLat([15.6979, 48.2831]),
    zoom: 15,
    maxZoom: 18,
  }),
});

map.on('click', function(evt) {
    var f = map.forEachFeatureAtPixel(
        evt.pixel,
        function(ft, layer){return ft;}
    );
    if (f && f.get('type') == 'click') {
        var geometry = f.getGeometry();
        var coord = geometry.getCoordinates();
        
        document.getElementById('img01').style.visibility = "visible"
 
    } 
});

map.on('pointermove', function(e){
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getViewport().style.cursor = hit ? 'pointer' : '';
});

document.getElementById('map').focus();
document.getElementById('img01').src = "assets/img/moon.png";
