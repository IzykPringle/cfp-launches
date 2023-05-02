import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const tempData = {
    "count": 6876,
    "next": "https://ll.thespacedevs.com/2.2.0/launch/?limit=10&offset=6610",
    "previous": "https://ll.thespacedevs.com/2.2.0/launch/?limit=10&offset=6590",
    "results": [
      {
        "id": "d8bd2b25-129b-4ab7-95d9-fb8ad1fdd73e",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/d8bd2b25-129b-4ab7-95d9-fb8ad1fdd73e/",
        "slug": "falcon-9-block-5-transporter-7-dedicated-sso-rides",
        "name": "Falcon 9 Block 5 | Transporter 7 (Dedicated SSO Rideshare)",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-04-15T09:26:02Z",
        "net": "2023-04-15T06:48:00Z",
        "window_end": "2023-04-15T06:48:00Z",
        "window_start": "2023-04-15T06:48:00Z",
        "net_precision": null,
        "probability": 99,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 7526,
          "configuration": {
            "id": 164,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "variant": "Block 5"
          }
        },
        "mission": {
          "id": 5945,
          "name": "Transporter 7 (Dedicated SSO Rideshare)",
          "description": "Transporter 7 mission is a dedicated rideshare flight to a sun-synchronous orbit with dozens of small microsatellites and nanosatellites for commercial and government customers.",
          "launch_designator": null,
          "type": "Dedicated Rideshare",
          "orbit": {
            "id": 17,
            "name": "Sun-Synchronous Orbit",
            "abbrev": "SSO"
          }
        },
        "pad": {
          "id": 16,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/16/",
          "agency_id": null,
          "name": "Space Launch Complex 4E",
          "info_url": null,
          "wiki_url": "",
          "map_url": "https://www.google.com/maps?q=34.632,-120.611",
          "latitude": "34.632",
          "longitude": "-120.611",
          "location": {
            "id": 11,
            "url": "https://ll.thespacedevs.com/2.2.0/location/11/",
            "name": "Vandenberg SFB, CA, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
            "timezone_name": "America/Los_Angeles",
            "total_launch_count": 717,
            "total_landing_count": 10
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg",
          "total_launch_count": 108,
          "orbital_launch_attempt_count": 108
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6416,
        "location_launch_attempt_count": 716,
        "pad_launch_attempt_count": 107,
        "agency_launch_attempt_count": 237,
        "orbital_launch_attempt_count_year": 58,
        "location_launch_attempt_count_year": 7,
        "pad_launch_attempt_count_year": 7,
        "agency_launch_attempt_count_year": 24
      },
      {
        "id": "82838641-de38-432c-b9d6-c967d3c01663",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/82838641-de38-432c-b9d6-c967d3c01663/",
        "slug": "long-march-4b-fengyun-3g",
        "name": "Long March 4B | Fengyun-3G",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-04-16T02:59:40Z",
        "net": "2023-04-16T01:36:00Z",
        "window_end": "2023-04-16T01:51:00Z",
        "window_start": "2023-04-16T01:28:00Z",
        "net_precision": null,
        "probability": -1,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 88,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/88/",
          "name": "China Aerospace Science and Technology Corporation",
          "type": "Government"
        },
        "rocket": {
          "id": 7791,
          "configuration": {
            "id": 10,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/10/",
            "name": "Long March 4B",
            "family": "Long March 4",
            "full_name": "Long March 4B",
            "variant": "B"
          }
        },
        "mission": {
          "id": 6345,
          "name": "Fengyun-3G",
          "description": "Fengyun-3G is a dedicated Low Earth Orbit precipitation measurement satellite, previously named FY-3RM-1, of the FY-3 series of Chinese Low Earth Orbit weather satellites.",
          "launch_designator": null,
          "type": "Earth Science",
          "orbit": {
            "id": 8,
            "name": "Low Earth Orbit",
            "abbrev": "LEO"
          }
        },
        "pad": {
          "id": 22,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/22/",
          "agency_id": null,
          "name": "Launch Area 4 (SLS-2 / 603)",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/Jiuquan_Launch_Area_4",
          "map_url": "https://www.google.com/maps?q=40.960556,100.298333",
          "latitude": "40.960556",
          "longitude": "100.298333",
          "location": {
            "id": 17,
            "url": "https://ll.thespacedevs.com/2.2.0/location/17/",
            "name": "Jiuquan, People's Republic of China",
            "country_code": "CHN",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_17_20200803142429.jpg",
            "timezone_name": "Asia/Shanghai",
            "total_launch_count": 191,
            "total_landing_count": 0
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_22_20200803143437.jpg",
          "total_launch_count": 94,
          "orbital_launch_attempt_count": 94
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/long2520march25204_image_20190430065008.jpg",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6417,
        "location_launch_attempt_count": 191,
        "pad_launch_attempt_count": 94,
        "agency_launch_attempt_count": 420,
        "orbital_launch_attempt_count_year": 59,
        "location_launch_attempt_count_year": 10,
        "pad_launch_attempt_count_year": 5,
        "agency_launch_attempt_count_year": 13
      },
      {
        "id": "8e4e1804-6ba8-486b-bbbb-e4d9f15c3376",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/8e4e1804-6ba8-486b-bbbb-e4d9f15c3376/",
        "slug": "falcon-9-block-5-starlink-group-6-2",
        "name": "Falcon 9 Block 5 | Starlink Group 6-2",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-04-19T15:39:24Z",
        "net": "2023-04-19T14:31:10Z",
        "window_end": "2023-04-19T14:31:10Z",
        "window_start": "2023-04-19T13:47:00Z",
        "net_precision": null,
        "probability": 80,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 7779,
          "configuration": {
            "id": 164,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "variant": "Block 5"
          }
        },
        "mission": {
          "id": 6297,
          "name": "Starlink Group 6-2",
          "description": "A batch of 21 v2 satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
          "launch_designator": null,
          "type": "Communications",
          "orbit": {
            "id": 8,
            "name": "Low Earth Orbit",
            "abbrev": "LEO"
          }
        },
        "pad": {
          "id": 80,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/80/",
          "agency_id": 121,
          "name": "Space Launch Complex 40",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
          "map_url": "https://www.google.com/maps?q=28.56194122,-80.57735736",
          "latitude": "28.56194122",
          "longitude": "-80.57735736",
          "location": {
            "id": 12,
            "url": "https://ll.thespacedevs.com/2.2.0/location/12/",
            "name": "Cape Canaveral, FL, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
            "timezone_name": "America/New_York",
            "total_launch_count": 884,
            "total_landing_count": 33
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
          "total_launch_count": 178,
          "orbital_launch_attempt_count": 178
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230209215716.png",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6418,
        "location_launch_attempt_count": 883,
        "pad_launch_attempt_count": 177,
        "agency_launch_attempt_count": 238,
        "orbital_launch_attempt_count_year": 60,
        "location_launch_attempt_count_year": 15,
        "pad_launch_attempt_count_year": 14,
        "agency_launch_attempt_count_year": 25
      },
      {
        "id": "e32d375f-0d6e-4e54-b4f2-2b49db657fca",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/e32d375f-0d6e-4e54-b4f2-2b49db657fca/",
        "slug": "starship-integrated-flight-test",
        "name": "Starship | Integrated Flight Test",
        "status": {
          "id": 4,
          "name": "Launch Failure",
          "abbrev": "Failure",
          "description": "Either the launch vehicle did not reach orbit, or the payload(s) failed to separate."
        },
        "last_updated": "2023-04-20T18:37:55Z",
        "net": "2023-04-20T13:33:00Z",
        "window_end": "2023-04-20T14:30:00Z",
        "window_start": "2023-04-20T13:28:00Z",
        "net_precision": null,
        "probability": null,
        "holdreason": "",
        "failreason": "No stage separation, destruction of the launch vehicle by the automatic flight termination system.",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 2881,
          "configuration": {
            "id": 464,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/464/",
            "name": "Starship",
            "family": "Starship",
            "full_name": "Starship",
            "variant": ""
          }
        },
        "mission": {
          "id": 1297,
          "name": "Integrated Flight Test",
          "description": "Maiden flight of the two-stage Starship launch vehicle. The booster was supposed to separate 170 seconds into flight and return to land approximately 32 km off the shore in the Gulf of Mexico. The second stage would have followed a suborbital trajectory and performed an unpowered splashdown approximately 100 km off the northwest coast of Kauai (Hawaii). A launch failure was experienced before stage separation.",
          "launch_designator": null,
          "type": "Test Flight",
          "orbit": {
            "id": 15,
            "name": "Suborbital",
            "abbrev": "Sub"
          }
        },
        "pad": {
          "id": 188,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/188/",
          "agency_id": 121,
          "name": "Orbital Launch Mount A",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
          "map_url": "https://www.google.com/maps?q=25.997116,-97.15503099856647",
          "latitude": "25.997116",
          "longitude": "-97.15503099856647",
          "location": {
            "id": 143,
            "url": "https://ll.thespacedevs.com/2.2.0/location/143/",
            "name": "SpaceX Space Launch Facility, TX, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
            "timezone_name": "America/Chicago",
            "total_launch_count": 10,
            "total_landing_count": 9
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_orbital_launch_mount_a_20210514061342.jpg",
          "total_launch_count": 1,
          "orbital_launch_attempt_count": 0
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship25202_image_20230417053710.jpeg",
        "infographic": null,
        "program": [
          {
            "id": 1,
            "url": "https://ll.thespacedevs.com/2.2.0/program/1/",
            "name": "SpaceX Starship",
            "description": "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
            "agencies": [
              {
                "id": 121,
                "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
              }
            ],
            "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
            "start_date": "2019-03-01T05:00:00Z",
            "end_date": null,
            "info_url": "https://www.spacex.com/vehicles/starship/",
            "wiki_url": "https://en.wikipedia.org/wiki/SpaceX_Starship",
            "mission_patches": []
          }
        ],
        "orbital_launch_attempt_count": null,
        "location_launch_attempt_count": 10,
        "pad_launch_attempt_count": 1,
        "agency_launch_attempt_count": 239,
        "orbital_launch_attempt_count_year": 0,
        "location_launch_attempt_count_year": 1,
        "pad_launch_attempt_count_year": 1,
        "agency_launch_attempt_count_year": 26
      },
      {
        "id": "b91a488c-1c12-477c-ab24-cebb7a6b8780",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/b91a488c-1c12-477c-ab24-cebb7a6b8780/",
        "slug": "pslv-ca-teleos-2",
        "name": "PSLV-CA | TeLEOS-2",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-04-22T09:28:38Z",
        "net": "2023-04-22T08:50:00Z",
        "window_end": "2023-04-22T08:50:00Z",
        "window_start": "2023-04-22T08:50:00Z",
        "net_precision": null,
        "probability": null,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 31,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/31/",
          "name": "Indian Space Research Organization",
          "type": "Government"
        },
        "rocket": {
          "id": 7815,
          "configuration": {
            "id": 43,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/43/",
            "name": "PSLV",
            "family": "PSLV",
            "full_name": "PSLV-CA",
            "variant": "CA"
          }
        },
        "mission": {
          "id": 6321,
          "name": "TeLEOS-2",
          "description": "TeLEOS-2 is a Singaporean Earth Observation satellite built by ST Electronics (Satellite Systems). It carries a made-in-Singapore Synthetic Aperture Radar (SAR) capable of providing 1 m resolution data. It will be equipped with a 500 GB onboard recorder for recording the data captured and a high speed 800 Mbps downlink.",
          "launch_designator": null,
          "type": "Earth Science",
          "orbit": {
            "id": 8,
            "name": "Low Earth Orbit",
            "abbrev": "LEO"
          }
        },
        "pad": {
          "id": 50,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/50/",
          "agency_id": 31,
          "name": "Satish Dhawan Space Centre First Launch Pad",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/Satish_Dhawan_Space_Centre_First_Launch_Pad",
          "map_url": "https://www.google.com/maps?q=13.733,80.235",
          "latitude": "13.733",
          "longitude": "80.235",
          "location": {
            "id": 14,
            "url": "https://ll.thespacedevs.com/2.2.0/location/14/",
            "name": "Satish Dhawan Space Centre, India",
            "country_code": "IND",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_14_20200803142403.jpg",
            "timezone_name": "Asia/Kolkata",
            "total_launch_count": 87,
            "total_landing_count": 0
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_50_20200803143457.jpg",
          "total_launch_count": 55,
          "orbital_launch_attempt_count": 55
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/pslv_image_20190520163034.jpg",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6419,
        "location_launch_attempt_count": 87,
        "pad_launch_attempt_count": 55,
        "agency_launch_attempt_count": 83,
        "orbital_launch_attempt_count_year": 61,
        "location_launch_attempt_count_year": 3,
        "pad_launch_attempt_count_year": 2,
        "agency_launch_attempt_count_year": 3
      },
      {
        "id": "bb327f29-b9c0-4b07-98a5-0493ab351875",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/bb327f29-b9c0-4b07-98a5-0493ab351875/",
        "slug": "falcon-9-block-5-starlink-group-3-5",
        "name": "Falcon 9 Block 5 | Starlink Group 3-5",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-04-27T14:44:31Z",
        "net": "2023-04-27T13:40:50Z",
        "window_end": "2023-04-27T13:40:50Z",
        "window_start": "2023-04-27T13:40:50Z",
        "net_precision": null,
        "probability": null,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 7776,
          "configuration": {
            "id": 164,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "variant": "Block 5"
          }
        },
        "mission": {
          "id": 6294,
          "name": "Starlink Group 3-5",
          "description": "A batch of 46 satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
          "launch_designator": null,
          "type": "Communications",
          "orbit": {
            "id": 8,
            "name": "Low Earth Orbit",
            "abbrev": "LEO"
          }
        },
        "pad": {
          "id": 16,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/16/",
          "agency_id": null,
          "name": "Space Launch Complex 4E",
          "info_url": null,
          "wiki_url": "",
          "map_url": "https://www.google.com/maps?q=34.632,-120.611",
          "latitude": "34.632",
          "longitude": "-120.611",
          "location": {
            "id": 11,
            "url": "https://ll.thespacedevs.com/2.2.0/location/11/",
            "name": "Vandenberg SFB, CA, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
            "timezone_name": "America/Los_Angeles",
            "total_launch_count": 717,
            "total_landing_count": 10
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg",
          "total_launch_count": 108,
          "orbital_launch_attempt_count": 108
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230209214919.png",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6420,
        "location_launch_attempt_count": 717,
        "pad_launch_attempt_count": 108,
        "agency_launch_attempt_count": 240,
        "orbital_launch_attempt_count_year": 62,
        "location_launch_attempt_count_year": 8,
        "pad_launch_attempt_count_year": 8,
        "agency_launch_attempt_count_year": 27
      },
      {
        "id": "ff9b6a09-2b5a-4ca3-934e-c86db21b7a1b",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/ff9b6a09-2b5a-4ca3-934e-c86db21b7a1b/",
        "slug": "falcon-9-block-5-o3b-mpower-3-4",
        "name": "Falcon 9 Block 5 | O3b mPower 3 & 4",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-04-29T02:46:29Z",
        "net": "2023-04-28T22:12:00Z",
        "window_end": "2023-04-28T22:40:00Z",
        "window_start": "2023-04-28T21:12:00Z",
        "net_precision": null,
        "probability": 70,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 2551,
          "configuration": {
            "id": 164,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "variant": "Block 5"
          }
        },
        "mission": {
          "id": 6159,
          "name": "O3b mPower 3 & 4",
          "description": "Third and fourth of a constellation of eleven high-throughput communications satellites in Medium Earth Orbit (MEO) built by Boeing and operated by SES.",
          "launch_designator": null,
          "type": "Communications",
          "orbit": {
            "id": 12,
            "name": "Medium Earth Orbit",
            "abbrev": "MEO"
          }
        },
        "pad": {
          "id": 80,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/80/",
          "agency_id": 121,
          "name": "Space Launch Complex 40",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
          "map_url": "https://www.google.com/maps?q=28.56194122,-80.57735736",
          "latitude": "28.56194122",
          "longitude": "-80.57735736",
          "location": {
            "id": 12,
            "url": "https://ll.thespacedevs.com/2.2.0/location/12/",
            "name": "Cape Canaveral, FL, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
            "timezone_name": "America/New_York",
            "total_launch_count": 884,
            "total_landing_count": 33
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
          "total_launch_count": 178,
          "orbital_launch_attempt_count": 178
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6421,
        "location_launch_attempt_count": 884,
        "pad_launch_attempt_count": 178,
        "agency_launch_attempt_count": 241,
        "orbital_launch_attempt_count_year": 63,
        "location_launch_attempt_count_year": 16,
        "pad_launch_attempt_count_year": 15,
        "agency_launch_attempt_count_year": 28
      },
      {
        "id": "8b1067dd-81c6-4bc3-b0f1-45f78963716f",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/8b1067dd-81c6-4bc3-b0f1-45f78963716f/",
        "slug": "falcon-heavy-viasat-3-americas-others",
        "name": "Falcon Heavy | ViaSat-3 Americas & Others",
        "status": {
          "id": 3,
          "name": "Launch Successful",
          "abbrev": "Success",
          "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
        },
        "last_updated": "2023-05-01T05:34:06Z",
        "net": "2023-05-01T00:26:00Z",
        "window_end": "2023-05-01T00:26:00Z",
        "window_start": "2023-04-30T23:29:00Z",
        "net_precision": {
          "id": 1,
          "name": "Minute",
          "abbrev": "MIN",
          "description": "The T-0 is accurate to the minute."
        },
        "probability": 95,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 2142,
          "configuration": {
            "id": 161,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/161/",
            "name": "Falcon Heavy",
            "family": "Falcon",
            "full_name": "Falcon Heavy",
            "variant": "Heavy"
          }
        },
        "mission": {
          "id": 699,
          "name": "ViaSat-3 Americas & Others",
          "description": "The ViaSat-3 is a series of three Ka-band satellites is expected to provide vastly superior capabilities in terms of service speed and flexibility for a satellite platform. Each ViaSat-3 class satellite is expected to deliver more than 1-Terabit per second of network capacity, and to leverage high levels of flexibility to dynamically direct capacity to where customers are located.\r\n\r\nAlso onboard this mission is Astranis's first MicroGEO satellite and Gravity Space’s GS-1 satellite.",
          "launch_designator": null,
          "type": "Communications",
          "orbit": {
            "id": 2,
            "name": "Geostationary Transfer Orbit",
            "abbrev": "GTO"
          }
        },
        "pad": {
          "id": 87,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/87/",
          "agency_id": null,
          "name": "Launch Complex 39A",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
          "map_url": "https://www.google.com/maps?q=28.60822681,-80.60428186",
          "latitude": "28.60822681",
          "longitude": "-80.60428186",
          "location": {
            "id": 27,
            "url": "https://ll.thespacedevs.com/2.2.0/location/27/",
            "name": "Kennedy Space Center, FL, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg",
            "timezone_name": "America/New_York",
            "total_launch_count": 218,
            "total_landing_count": 0
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg",
          "total_launch_count": 160,
          "orbital_launch_attempt_count": 159
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520heav_image_20230426123306.jpeg",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6422,
        "location_launch_attempt_count": 218,
        "pad_launch_attempt_count": 160,
        "agency_launch_attempt_count": 242,
        "orbital_launch_attempt_count_year": 64,
        "location_launch_attempt_count_year": 5,
        "pad_launch_attempt_count_year": 5,
        "agency_launch_attempt_count_year": 29
      },
      {
        "id": "16e0f780-7d6d-46bc-a0d4-cb23368e3501",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/16e0f780-7d6d-46bc-a0d4-cb23368e3501/",
        "slug": "falcon-9-block-5-starlink-group-5-6",
        "name": "Falcon 9 Block 5 | Starlink Group 5-6",
        "status": {
          "id": 8,
          "name": "To Be Confirmed",
          "abbrev": "TBC",
          "description": "Awaiting official confirmation - current date is known with some certainty."
        },
        "last_updated": "2023-05-01T19:27:27Z",
        "net": "2023-05-04T07:29:00Z",
        "window_end": "2023-05-04T11:12:00Z",
        "window_start": "2023-05-04T07:19:00Z",
        "net_precision": {
          "id": 1,
          "name": "Minute",
          "abbrev": "MIN",
          "description": "The T-0 is accurate to the minute."
        },
        "probability": 95,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 7695,
          "configuration": {
            "id": 164,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "variant": "Block 5"
          }
        },
        "mission": {
          "id": 6211,
          "name": "Starlink Group 5-6",
          "description": "A batch of satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
          "launch_designator": null,
          "type": "Communications",
          "orbit": {
            "id": 8,
            "name": "Low Earth Orbit",
            "abbrev": "LEO"
          }
        },
        "pad": {
          "id": 80,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/80/",
          "agency_id": 121,
          "name": "Space Launch Complex 40",
          "info_url": null,
          "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
          "map_url": "https://www.google.com/maps?q=28.56194122,-80.57735736",
          "latitude": "28.56194122",
          "longitude": "-80.57735736",
          "location": {
            "id": 12,
            "url": "https://ll.thespacedevs.com/2.2.0/location/12/",
            "name": "Cape Canaveral, FL, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
            "timezone_name": "America/New_York",
            "total_launch_count": 884,
            "total_landing_count": 33
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
          "total_launch_count": 178,
          "orbital_launch_attempt_count": 178
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20221102115051.png",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6424,
        "location_launch_attempt_count": 885,
        "pad_launch_attempt_count": 179,
        "agency_launch_attempt_count": 243,
        "orbital_launch_attempt_count_year": 66,
        "location_launch_attempt_count_year": 17,
        "pad_launch_attempt_count_year": 16,
        "agency_launch_attempt_count_year": 30
      },
      {
        "id": "84dd42a7-765d-404c-bf12-a81eeb0f2e32",
        "url": "https://ll.thespacedevs.com/2.2.0/launch/84dd42a7-765d-404c-bf12-a81eeb0f2e32/",
        "slug": "falcon-9-block-5-starlink-group-2-9",
        "name": "Falcon 9 Block 5 | Starlink Group 2-9",
        "status": {
          "id": 2,
          "name": "To Be Determined",
          "abbrev": "TBD",
          "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources."
        },
        "last_updated": "2023-05-01T19:26:19Z",
        "net": "2023-05-08T00:00:00Z",
        "window_end": "2023-05-08T00:00:00Z",
        "window_start": "2023-05-08T00:00:00Z",
        "net_precision": {
          "id": 5,
          "name": "Day",
          "abbrev": "DAY",
          "description": "The T-0 is expected on the given day."
        },
        "probability": null,
        "holdreason": "",
        "failreason": "",
        "hashtag": null,
        "launch_service_provider": {
          "id": 121,
          "url": "https://ll.thespacedevs.com/2.2.0/agencies/121/",
          "name": "SpaceX",
          "type": "Commercial"
        },
        "rocket": {
          "id": 7813,
          "configuration": {
            "id": 164,
            "url": "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
            "name": "Falcon 9",
            "family": "Falcon",
            "full_name": "Falcon 9 Block 5",
            "variant": "Block 5"
          }
        },
        "mission": {
          "id": 6319,
          "name": "Starlink Group 2-9",
          "description": "A batch of satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
          "launch_designator": null,
          "type": "Communications",
          "orbit": {
            "id": 8,
            "name": "Low Earth Orbit",
            "abbrev": "LEO"
          }
        },
        "pad": {
          "id": 16,
          "url": "https://ll.thespacedevs.com/2.2.0/pad/16/",
          "agency_id": null,
          "name": "Space Launch Complex 4E",
          "info_url": null,
          "wiki_url": "",
          "map_url": "https://www.google.com/maps?q=34.632,-120.611",
          "latitude": "34.632",
          "longitude": "-120.611",
          "location": {
            "id": 11,
            "url": "https://ll.thespacedevs.com/2.2.0/location/11/",
            "name": "Vandenberg SFB, CA, USA",
            "country_code": "USA",
            "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
            "timezone_name": "America/Los_Angeles",
            "total_launch_count": 717,
            "total_landing_count": 10
          },
          "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg",
          "total_launch_count": 108,
          "orbital_launch_attempt_count": 108
        },
        "webcast_live": false,
        "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230307143022.png",
        "infographic": null,
        "program": [],
        "orbital_launch_attempt_count": 6425,
        "location_launch_attempt_count": 718,
        "pad_launch_attempt_count": 109,
        "agency_launch_attempt_count": 244,
        "orbital_launch_attempt_count_year": 67,
        "location_launch_attempt_count_year": 9,
        "pad_launch_attempt_count_year": 9,
        "agency_launch_attempt_count_year": 31
      }
    ]
  }




  const launchLocations = ["Kennedy Space Center, FL, USA", "Vandenberg SFB, CA, USA", "Cape Canaveral, FL, USA"]
  let filteredLaunches = [];

  const [launches, setLaunches] = useState();

  useEffect(() => {
    // fetch("https://ll.thespacedevs.com/2.2.0/launch/?offset=6850")
    //   .then((response) => response.json())
    //   .then((data) => setLaunches(data))
    //   .then(() => console?.log(launches))
    //   .then(() => filterRockets())
    // fetch('')
    //   .then(setLaunches(tempData))
    //   .then(console.log(launches))
    //   .then(filterRockets())
    //.then(setLaunches(filteredLaunches))

  }, []);

  useEffect(() => {
    console.log(launches)
  }, [launches])

  function filterRockets() {
    for (let i in launchLocations) {
      filteredLaunches.push(tempData.results.filter(launch => launch.pad.location.name === launchLocations[i]))
      filteredLaunches = filteredLaunches.flat();
      console?.log(launches);
      console.log('filtered launches: ', filteredLaunches);
    }
  }

  function rocketInfo(launch) {
    let mission = '';
    let status = '';
    let launchDate = launch.net.slice(0, 10)
    if (launch.mission) {
      mission = launch.mission;
    }
    if (launch.status.name === 'To Be Determined') {
      status = 'Launch Pending';
    } else {
      status = launch.status.name;
    }
   
    return (
      <>
        <img id='cardItem' src={`${launch.image}`} width={100} />
        <div id='cardItem'>{launch.name}</div>
        <div id='cardItem'>{launch.launch_service_provider.name}</div>
        <div id='cardItem'>status: {status}</div>
        <div id='cardItem'>{mission.name}</div>
        <div id='cardItem'>{mission.type}</div>
        <div id='cardItem'>{mission.description}</div>
        <div id='cardItem'>{launchDate}</div>
      </>
    )
  }

  function header() {
    return (
      <div id='headerContainer'>
<div>Picture</div>
<div>Launch Vehicle (LV)</div>
<div> Launch Service Provider (LSP)</div>
<div>Mission Status</div>
<div>Mission</div>
<div>Mission Type</div>
<div>Description</div>
<div>Launch Date</div>
      </div>
    )
  }

  filterRockets();
  return (
    <div id='app'>
      {header()}
      {filteredLaunches.map(launch =>
        <div key={launch.id} id='rocketCard'> {rocketInfo(launch)} </div>


      )}
      hi

    </div>
  );
}

export default App;
