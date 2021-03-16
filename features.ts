import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import * as ol from 'ol';

var icons = [
  new ol.Feature({
    geometry: new Point(fromLonLat([15.69526, 48.28461])),
    addr: 'Dsdd',
    type: 'click',
    text: 0
  }),
  
  new ol.Feature({
    geometry: new Point(fromLonLat([15.69476, 48.28529])),
    addr: 'sdgfg',
    type: 'click',
    text: 1
  }),

  new ol.Feature({
    geometry: new Point(fromLonLat([15.69476, 48.28529])),
    addr: 'sdgfg',
    type: 'click',
    text: 1
  })
]

export default {
  icons: icons
}