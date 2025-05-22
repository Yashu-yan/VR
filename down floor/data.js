var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "地下街",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": 0.40595005266039763,
        "pitch": 0.005088522015711305,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.052618404554538145,
          "pitch": 0.12654854795055392,
          "rotation": 0,
          "target": "1-1"
        },
        {
          "yaw": 1.5108199057301048,
          "pitch": 0.12210859339942814,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1",
      "name": "地下街1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1006885180304344,
          "pitch": 0.2438936658135944,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
	  {
          "yaw": -2.279709454868181,
          "pitch": -0.10886630773557116,
          "title": "日本美妝店",
          "text": "Text"
        }
		]
    },
    {
      "id": "2-",
      "name": "進站",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.051520013429506406,
          "pitch": 0.1697313205510369,
          "rotation": 0,
          "target": "3-2"
        },
        {
          "yaw": -3.1365155492090206,
          "pitch": 0.18732855073616506,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-2",
      "name": "地下街2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5147480077577313,
          "pitch": 0.21220526389896577,
          "rotation": 0.7853981633974483,
          "target": "4-"
        },
        {
          "yaw": 0.030809641989577585,
          "pitch": 0.2585597437526843,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [ 
	{
          "yaw": 3.0074187579085248,
          "pitch": -0.16042310978046181,
          "title": "台鐵便當",
          "text": "車站或列車內販售之鐵路便當"
    }
	]
    },
    {
      "id": "4-",
      "name": "高鐵購票",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [ 
	  {
          "yaw": 0.1804161967043676,
          "pitch": 0.2377202451224143,
          "rotation": 6.283185307179586,
          "target": "3-2"
      }
	  ],
      "infoHotspots": []
    }
  ],
  "name": "地下街",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
