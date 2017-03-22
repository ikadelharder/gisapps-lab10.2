document.addEventListener('DOMContentLoaded', function () {

var map = L.map('map').setView([40.38, -105.5], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/brightrain/ciycbsoa8007c2rqf7ym69old/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpZ2h0cmFpbiIsImEiOiJyMjgtNGk4In0.Y64dPMiS4Xi8BXRiDhWXyg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

function showLatLng(e) {
    document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
map.on('mousemove', showLatLng);

document.getElementById("goToFRCCBoulder").onclick = function () {
    map.setView([40.1386, -105.12793], 16);
};

document.getElementById("goToRMNP").onclick = function () {
    map.setView([40.054, -105.66], 14);
};

function onMapClick(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("<h4> :) " + e.latlng.lat + " | " + e.latlng.lng + "<br> <center>We see you...</center></h4><center><img class='popUpImage' src='https://ago-item-storage.s3-external-1.amazonaws.com/3011710ccbf7417d83e1fd0825b72db2/noun_768734_cc.png?X-Amz-Security-Token=FQoDYXdzECQaDMP%2BP8FVT%2FuKl29Q6CKcAy0V8LRnZ6hCTNLJub7lerFK07vVkjQo2gl%2FCpqmMXP3FexYoWxnfY3dMKyqW%2FnM8%2FkfXSI%2FPomR0aI%2FrHukqICde4O4AA14TJk6S%2Fp12WH5VRPYtYrl2iTkHG8TJR%2FtDQw2bruCob9d4KlCeYYaJDPJO5UHIHh5tiIEDiQtehAhH1EQfZY6Ttcar27d5vlPVJGSYFQ0IT7c6JDZOYkAKMDJuaYogZiS0%2Bx9uqxuTd3cMKNvd%2B8SsgtPPcHVZ6JCLnUXHENzMepaoUC1NuoPW81wteJJhKPCurPNMFjbu2Ntr4Uyog5EZmBUpsiSMGQB2zV%2BDxo1sWpu9qwadbTznR4qEFjc32ZZDOX35M9JU4aDnSn5TMI7r56dmElTwo5UbD9%2BPkLCVRAfDhVzNG7dbxMv7Nc13%2FENvzfWOOUArD3zJyKZTwS9XIoflbLFJTC5sJ74MNALaXyoPQzL1OQB%2BHv2ZkMmE3ol67IBu%2F0B8xbMGxdbYtiJhP2sO%2BgwbRMTPgjr457UVdCoGu7QFSFdMtKCMNziEZH2zWhPU8wonOv9xQU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20170308T040218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJNUWHIJSOU4YX4BQ%2F20170308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df377d88e73df61cd369556c8463cdb16e1063917b95c8a87cb0ef529de3b2d8'></center>")
        .openOn(map);
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

var myStyle = {
    "color": "rgb(204, 49, 106)",
    "weight": 5,
    "opacity": 0.65,
    "fill": "rgb(180, 204, 49)",
};

var lakes = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#555555",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
          [
            [
              -105.65427303314209,
              40.06677441031923
            ],
            [
              -105.65680503845215,
              40.06621607890702
            ],
            [
              -105.65453052520752,
              40.065887646526896
            ],
            [
              -105.65427303314209,
              40.06677441031923
            ]
          ]
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#555555",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
          [
            [
              -105.6708812713623,
              40.056231026961676
            ],
            [
              -105.67019462585449,
              40.05652665807138
            ],
            [
              -105.66950798034667,
              40.057052221322
            ],
            [
              -105.66967964172363,
              40.05728215396955
            ],
            [
              -105.67019462585449,
              40.05728215396955
            ],
            [
              -105.67083835601805,
              40.056789440203374
            ],
            [
              -105.6708812713623,
              40.056231026961676
            ]
          ]
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#ff80c0",
                "stroke-width": 2,
                "stroke-opacity": 1,
                "fill": "#278375",
                "fill-opacity": 0.5
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
          [
            [
              -105.66221237182617,
              40.076922107265524
            ],
            [
              -105.66307067871094,
              40.07738183766717
            ],
            [
              -105.66452980041504,
              40.076757917084194
            ],
            [
              -105.66564559936523,
              40.07593696023929
            ],
            [
              -105.66633224487305,
              40.07567425195865
            ],
            [
              -105.66676139831543,
              40.075017476823206
            ],
            [
              -105.66654682159422,
              40.07442637378568
            ],
            [
              -105.66637516021729,
              40.07390094455624
            ],
            [
              -105.66586017608641,
              40.07380242612445
            ],
            [
              -105.66517353057861,
              40.07409798099234
            ],
            [
              -105.66457271575926,
              40.074393534577595
            ],
            [
              -105.66367149353027,
              40.07459056958852
            ],
            [
              -105.6630277633667,
              40.075017476823206
            ],
            [
              -105.66195487976073,
              40.07541154266456
            ],
            [
              -105.66165447235107,
              40.07560857473014
            ],
            [
              -105.66178321838379,
              40.07626534416489
            ],
            [
              -105.66169738769531,
              40.07685643124051
            ],
            [
              -105.66122531890869,
              40.07734899988426
            ],
            [
              -105.66221237182617,
              40.076922107265524
            ]
          ]
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "marker-color": "rgb(204, 49, 106)",
                "marker-size": "medium",
                "marker-symbol": ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
          -105.64637660980225,
          40.081913299828685
        ]
            }
    },
        {
            "type": "Feature",
            "properties": {
                "stroke": "#555555",
                "stroke-width": 2.4,
                "stroke-opacity": 1
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
          [
            -105.65942287445068,
            40.08184762861768
          ],
          [
            -105.65968036651611,
            40.082570008454866
          ],
          [
            -105.65916538238525,
            40.0833252155441
          ],
          [
            -105.65916538238525,
            40.084146083313414
          ],
          [
            -105.66238403320312,
            40.08805327821117
          ],
          [
            -105.6749153137207,
            40.095407389642226
          ],
          [
            -105.68315505981445,
            40.100528533549756
          ]
        ]
            }
    }
  ]
};
L.geoJSON(lakes).addTo(map);

L.geoJSON(lakes, {
    style: myStyle
}).addTo(map);

});