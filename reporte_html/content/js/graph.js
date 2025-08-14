/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 63.0, "minX": 0.0, "maxY": 21504.0, "series": [{"data": [[0.0, 63.0], [0.1, 275.0], [0.2, 276.0], [0.3, 276.0], [0.4, 277.0], [0.5, 277.0], [0.6, 277.0], [0.7, 277.0], [0.8, 278.0], [0.9, 278.0], [1.0, 278.0], [1.1, 278.0], [1.2, 278.0], [1.3, 278.0], [1.4, 279.0], [1.5, 279.0], [1.6, 279.0], [1.7, 279.0], [1.8, 279.0], [1.9, 279.0], [2.0, 279.0], [2.1, 279.0], [2.2, 280.0], [2.3, 280.0], [2.4, 280.0], [2.5, 280.0], [2.6, 280.0], [2.7, 280.0], [2.8, 280.0], [2.9, 280.0], [3.0, 280.0], [3.1, 280.0], [3.2, 281.0], [3.3, 281.0], [3.4, 281.0], [3.5, 281.0], [3.6, 281.0], [3.7, 281.0], [3.8, 281.0], [3.9, 281.0], [4.0, 281.0], [4.1, 281.0], [4.2, 282.0], [4.3, 282.0], [4.4, 282.0], [4.5, 282.0], [4.6, 282.0], [4.7, 282.0], [4.8, 282.0], [4.9, 282.0], [5.0, 282.0], [5.1, 282.0], [5.2, 282.0], [5.3, 282.0], [5.4, 282.0], [5.5, 282.0], [5.6, 283.0], [5.7, 283.0], [5.8, 283.0], [5.9, 283.0], [6.0, 283.0], [6.1, 283.0], [6.2, 283.0], [6.3, 283.0], [6.4, 283.0], [6.5, 283.0], [6.6, 283.0], [6.7, 283.0], [6.8, 283.0], [6.9, 283.0], [7.0, 284.0], [7.1, 284.0], [7.2, 284.0], [7.3, 284.0], [7.4, 284.0], [7.5, 284.0], [7.6, 284.0], [7.7, 284.0], [7.8, 284.0], [7.9, 284.0], [8.0, 284.0], [8.1, 284.0], [8.2, 285.0], [8.3, 285.0], [8.4, 285.0], [8.5, 285.0], [8.6, 285.0], [8.7, 285.0], [8.8, 285.0], [8.9, 285.0], [9.0, 285.0], [9.1, 285.0], [9.2, 285.0], [9.3, 285.0], [9.4, 285.0], [9.5, 286.0], [9.6, 286.0], [9.7, 286.0], [9.8, 286.0], [9.9, 286.0], [10.0, 286.0], [10.1, 286.0], [10.2, 286.0], [10.3, 286.0], [10.4, 286.0], [10.5, 286.0], [10.6, 286.0], [10.7, 286.0], [10.8, 286.0], [10.9, 286.0], [11.0, 286.0], [11.1, 286.0], [11.2, 287.0], [11.3, 287.0], [11.4, 287.0], [11.5, 287.0], [11.6, 287.0], [11.7, 287.0], [11.8, 287.0], [11.9, 287.0], [12.0, 287.0], [12.1, 287.0], [12.2, 287.0], [12.3, 287.0], [12.4, 287.0], [12.5, 287.0], [12.6, 287.0], [12.7, 287.0], [12.8, 288.0], [12.9, 288.0], [13.0, 288.0], [13.1, 288.0], [13.2, 288.0], [13.3, 288.0], [13.4, 288.0], [13.5, 288.0], [13.6, 288.0], [13.7, 288.0], [13.8, 288.0], [13.9, 288.0], [14.0, 288.0], [14.1, 288.0], [14.2, 288.0], [14.3, 289.0], [14.4, 289.0], [14.5, 289.0], [14.6, 289.0], [14.7, 289.0], [14.8, 289.0], [14.9, 289.0], [15.0, 289.0], [15.1, 289.0], [15.2, 289.0], [15.3, 289.0], [15.4, 289.0], [15.5, 289.0], [15.6, 289.0], [15.7, 289.0], [15.8, 290.0], [15.9, 290.0], [16.0, 290.0], [16.1, 290.0], [16.2, 290.0], [16.3, 290.0], [16.4, 290.0], [16.5, 290.0], [16.6, 290.0], [16.7, 290.0], [16.8, 290.0], [16.9, 290.0], [17.0, 290.0], [17.1, 290.0], [17.2, 290.0], [17.3, 290.0], [17.4, 290.0], [17.5, 290.0], [17.6, 291.0], [17.7, 291.0], [17.8, 291.0], [17.9, 291.0], [18.0, 291.0], [18.1, 291.0], [18.2, 291.0], [18.3, 291.0], [18.4, 291.0], [18.5, 291.0], [18.6, 291.0], [18.7, 291.0], [18.8, 291.0], [18.9, 291.0], [19.0, 291.0], [19.1, 291.0], [19.2, 291.0], [19.3, 291.0], [19.4, 291.0], [19.5, 291.0], [19.6, 292.0], [19.7, 292.0], [19.8, 292.0], [19.9, 292.0], [20.0, 292.0], [20.1, 292.0], [20.2, 292.0], [20.3, 292.0], [20.4, 292.0], [20.5, 292.0], [20.6, 292.0], [20.7, 292.0], [20.8, 292.0], [20.9, 292.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 292.0], [21.4, 292.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 293.0], [21.9, 293.0], [22.0, 293.0], [22.1, 293.0], [22.2, 293.0], [22.3, 293.0], [22.4, 293.0], [22.5, 293.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 293.0], [23.3, 293.0], [23.4, 293.0], [23.5, 293.0], [23.6, 293.0], [23.7, 294.0], [23.8, 294.0], [23.9, 294.0], [24.0, 294.0], [24.1, 294.0], [24.2, 294.0], [24.3, 294.0], [24.4, 294.0], [24.5, 294.0], [24.6, 294.0], [24.7, 294.0], [24.8, 294.0], [24.9, 294.0], [25.0, 294.0], [25.1, 294.0], [25.2, 294.0], [25.3, 294.0], [25.4, 294.0], [25.5, 294.0], [25.6, 294.0], [25.7, 294.0], [25.8, 294.0], [25.9, 294.0], [26.0, 294.0], [26.1, 295.0], [26.2, 295.0], [26.3, 295.0], [26.4, 295.0], [26.5, 295.0], [26.6, 295.0], [26.7, 295.0], [26.8, 295.0], [26.9, 295.0], [27.0, 295.0], [27.1, 295.0], [27.2, 295.0], [27.3, 295.0], [27.4, 295.0], [27.5, 295.0], [27.6, 295.0], [27.7, 295.0], [27.8, 295.0], [27.9, 295.0], [28.0, 295.0], [28.1, 295.0], [28.2, 295.0], [28.3, 295.0], [28.4, 296.0], [28.5, 296.0], [28.6, 296.0], [28.7, 296.0], [28.8, 296.0], [28.9, 296.0], [29.0, 296.0], [29.1, 296.0], [29.2, 296.0], [29.3, 296.0], [29.4, 296.0], [29.5, 296.0], [29.6, 296.0], [29.7, 296.0], [29.8, 296.0], [29.9, 296.0], [30.0, 296.0], [30.1, 296.0], [30.2, 296.0], [30.3, 296.0], [30.4, 296.0], [30.5, 296.0], [30.6, 296.0], [30.7, 296.0], [30.8, 297.0], [30.9, 297.0], [31.0, 297.0], [31.1, 297.0], [31.2, 297.0], [31.3, 297.0], [31.4, 297.0], [31.5, 297.0], [31.6, 297.0], [31.7, 297.0], [31.8, 297.0], [31.9, 297.0], [32.0, 297.0], [32.1, 297.0], [32.2, 297.0], [32.3, 297.0], [32.4, 297.0], [32.5, 297.0], [32.6, 297.0], [32.7, 297.0], [32.8, 297.0], [32.9, 297.0], [33.0, 297.0], [33.1, 297.0], [33.2, 297.0], [33.3, 298.0], [33.4, 298.0], [33.5, 298.0], [33.6, 298.0], [33.7, 298.0], [33.8, 298.0], [33.9, 298.0], [34.0, 298.0], [34.1, 298.0], [34.2, 298.0], [34.3, 298.0], [34.4, 298.0], [34.5, 298.0], [34.6, 298.0], [34.7, 298.0], [34.8, 298.0], [34.9, 298.0], [35.0, 298.0], [35.1, 298.0], [35.2, 298.0], [35.3, 298.0], [35.4, 298.0], [35.5, 299.0], [35.6, 299.0], [35.7, 299.0], [35.8, 299.0], [35.9, 299.0], [36.0, 299.0], [36.1, 299.0], [36.2, 299.0], [36.3, 299.0], [36.4, 299.0], [36.5, 299.0], [36.6, 299.0], [36.7, 299.0], [36.8, 299.0], [36.9, 299.0], [37.0, 299.0], [37.1, 299.0], [37.2, 299.0], [37.3, 299.0], [37.4, 299.0], [37.5, 299.0], [37.6, 299.0], [37.7, 300.0], [37.8, 300.0], [37.9, 300.0], [38.0, 300.0], [38.1, 300.0], [38.2, 300.0], [38.3, 300.0], [38.4, 300.0], [38.5, 300.0], [38.6, 300.0], [38.7, 300.0], [38.8, 300.0], [38.9, 300.0], [39.0, 300.0], [39.1, 300.0], [39.2, 300.0], [39.3, 300.0], [39.4, 300.0], [39.5, 300.0], [39.6, 300.0], [39.7, 300.0], [39.8, 300.0], [39.9, 300.0], [40.0, 301.0], [40.1, 301.0], [40.2, 301.0], [40.3, 301.0], [40.4, 301.0], [40.5, 301.0], [40.6, 301.0], [40.7, 301.0], [40.8, 301.0], [40.9, 301.0], [41.0, 301.0], [41.1, 301.0], [41.2, 301.0], [41.3, 301.0], [41.4, 301.0], [41.5, 301.0], [41.6, 301.0], [41.7, 301.0], [41.8, 301.0], [41.9, 301.0], [42.0, 301.0], [42.1, 301.0], [42.2, 301.0], [42.3, 301.0], [42.4, 301.0], [42.5, 302.0], [42.6, 302.0], [42.7, 302.0], [42.8, 302.0], [42.9, 302.0], [43.0, 302.0], [43.1, 302.0], [43.2, 302.0], [43.3, 302.0], [43.4, 302.0], [43.5, 302.0], [43.6, 302.0], [43.7, 302.0], [43.8, 302.0], [43.9, 302.0], [44.0, 302.0], [44.1, 302.0], [44.2, 302.0], [44.3, 302.0], [44.4, 302.0], [44.5, 302.0], [44.6, 302.0], [44.7, 303.0], [44.8, 303.0], [44.9, 303.0], [45.0, 303.0], [45.1, 303.0], [45.2, 303.0], [45.3, 303.0], [45.4, 303.0], [45.5, 303.0], [45.6, 303.0], [45.7, 303.0], [45.8, 303.0], [45.9, 303.0], [46.0, 303.0], [46.1, 303.0], [46.2, 303.0], [46.3, 303.0], [46.4, 303.0], [46.5, 303.0], [46.6, 303.0], [46.7, 303.0], [46.8, 303.0], [46.9, 304.0], [47.0, 304.0], [47.1, 304.0], [47.2, 304.0], [47.3, 304.0], [47.4, 304.0], [47.5, 304.0], [47.6, 304.0], [47.7, 304.0], [47.8, 304.0], [47.9, 304.0], [48.0, 304.0], [48.1, 304.0], [48.2, 304.0], [48.3, 304.0], [48.4, 304.0], [48.5, 304.0], [48.6, 304.0], [48.7, 304.0], [48.8, 304.0], [48.9, 305.0], [49.0, 305.0], [49.1, 305.0], [49.2, 305.0], [49.3, 305.0], [49.4, 305.0], [49.5, 305.0], [49.6, 305.0], [49.7, 305.0], [49.8, 305.0], [49.9, 305.0], [50.0, 305.0], [50.1, 305.0], [50.2, 305.0], [50.3, 305.0], [50.4, 305.0], [50.5, 305.0], [50.6, 305.0], [50.7, 305.0], [50.8, 305.0], [50.9, 305.0], [51.0, 306.0], [51.1, 306.0], [51.2, 306.0], [51.3, 306.0], [51.4, 306.0], [51.5, 306.0], [51.6, 306.0], [51.7, 306.0], [51.8, 306.0], [51.9, 306.0], [52.0, 306.0], [52.1, 306.0], [52.2, 306.0], [52.3, 306.0], [52.4, 306.0], [52.5, 306.0], [52.6, 306.0], [52.7, 306.0], [52.8, 306.0], [52.9, 306.0], [53.0, 306.0], [53.1, 306.0], [53.2, 306.0], [53.3, 306.0], [53.4, 307.0], [53.5, 307.0], [53.6, 307.0], [53.7, 307.0], [53.8, 307.0], [53.9, 307.0], [54.0, 307.0], [54.1, 307.0], [54.2, 307.0], [54.3, 307.0], [54.4, 307.0], [54.5, 307.0], [54.6, 307.0], [54.7, 307.0], [54.8, 307.0], [54.9, 307.0], [55.0, 307.0], [55.1, 307.0], [55.2, 307.0], [55.3, 307.0], [55.4, 308.0], [55.5, 308.0], [55.6, 308.0], [55.7, 308.0], [55.8, 308.0], [55.9, 308.0], [56.0, 308.0], [56.1, 308.0], [56.2, 308.0], [56.3, 308.0], [56.4, 308.0], [56.5, 308.0], [56.6, 308.0], [56.7, 308.0], [56.8, 308.0], [56.9, 308.0], [57.0, 308.0], [57.1, 308.0], [57.2, 308.0], [57.3, 309.0], [57.4, 309.0], [57.5, 309.0], [57.6, 309.0], [57.7, 309.0], [57.8, 309.0], [57.9, 309.0], [58.0, 309.0], [58.1, 309.0], [58.2, 309.0], [58.3, 309.0], [58.4, 309.0], [58.5, 309.0], [58.6, 309.0], [58.7, 309.0], [58.8, 309.0], [58.9, 309.0], [59.0, 309.0], [59.1, 310.0], [59.2, 310.0], [59.3, 310.0], [59.4, 310.0], [59.5, 310.0], [59.6, 310.0], [59.7, 310.0], [59.8, 310.0], [59.9, 310.0], [60.0, 310.0], [60.1, 310.0], [60.2, 310.0], [60.3, 310.0], [60.4, 310.0], [60.5, 310.0], [60.6, 310.0], [60.7, 311.0], [60.8, 311.0], [60.9, 311.0], [61.0, 311.0], [61.1, 311.0], [61.2, 311.0], [61.3, 311.0], [61.4, 311.0], [61.5, 311.0], [61.6, 311.0], [61.7, 311.0], [61.8, 311.0], [61.9, 311.0], [62.0, 311.0], [62.1, 311.0], [62.2, 311.0], [62.3, 312.0], [62.4, 312.0], [62.5, 312.0], [62.6, 312.0], [62.7, 312.0], [62.8, 312.0], [62.9, 312.0], [63.0, 312.0], [63.1, 312.0], [63.2, 312.0], [63.3, 312.0], [63.4, 312.0], [63.5, 312.0], [63.6, 312.0], [63.7, 313.0], [63.8, 313.0], [63.9, 313.0], [64.0, 313.0], [64.1, 313.0], [64.2, 313.0], [64.3, 313.0], [64.4, 313.0], [64.5, 313.0], [64.6, 313.0], [64.7, 313.0], [64.8, 314.0], [64.9, 314.0], [65.0, 314.0], [65.1, 314.0], [65.2, 314.0], [65.3, 314.0], [65.4, 314.0], [65.5, 314.0], [65.6, 314.0], [65.7, 314.0], [65.8, 315.0], [65.9, 315.0], [66.0, 315.0], [66.1, 315.0], [66.2, 315.0], [66.3, 315.0], [66.4, 315.0], [66.5, 315.0], [66.6, 315.0], [66.7, 315.0], [66.8, 316.0], [66.9, 316.0], [67.0, 316.0], [67.1, 316.0], [67.2, 316.0], [67.3, 316.0], [67.4, 316.0], [67.5, 316.0], [67.6, 316.0], [67.7, 316.0], [67.8, 317.0], [67.9, 317.0], [68.0, 317.0], [68.1, 317.0], [68.2, 317.0], [68.3, 317.0], [68.4, 317.0], [68.5, 317.0], [68.6, 317.0], [68.7, 318.0], [68.8, 318.0], [68.9, 318.0], [69.0, 318.0], [69.1, 318.0], [69.2, 318.0], [69.3, 318.0], [69.4, 319.0], [69.5, 319.0], [69.6, 319.0], [69.7, 319.0], [69.8, 319.0], [69.9, 319.0], [70.0, 319.0], [70.1, 320.0], [70.2, 320.0], [70.3, 320.0], [70.4, 320.0], [70.5, 320.0], [70.6, 320.0], [70.7, 321.0], [70.8, 321.0], [70.9, 321.0], [71.0, 321.0], [71.1, 321.0], [71.2, 322.0], [71.3, 322.0], [71.4, 322.0], [71.5, 322.0], [71.6, 323.0], [71.7, 323.0], [71.8, 323.0], [71.9, 323.0], [72.0, 324.0], [72.1, 324.0], [72.2, 324.0], [72.3, 324.0], [72.4, 325.0], [72.5, 325.0], [72.6, 326.0], [72.7, 326.0], [72.8, 327.0], [72.9, 327.0], [73.0, 327.0], [73.1, 328.0], [73.2, 328.0], [73.3, 328.0], [73.4, 329.0], [73.5, 329.0], [73.6, 330.0], [73.7, 330.0], [73.8, 331.0], [73.9, 332.0], [74.0, 332.0], [74.1, 333.0], [74.2, 334.0], [74.3, 335.0], [74.4, 335.0], [74.5, 337.0], [74.6, 338.0], [74.7, 339.0], [74.8, 342.0], [74.9, 344.0], [75.0, 347.0], [75.1, 351.0], [75.2, 356.0], [75.3, 364.0], [75.4, 382.0], [75.5, 397.0], [75.6, 400.0], [75.7, 405.0], [75.8, 408.0], [75.9, 415.0], [76.0, 431.0], [76.1, 447.0], [76.2, 466.0], [76.3, 489.0], [76.4, 555.0], [76.5, 617.0], [76.6, 706.0], [76.7, 744.0], [76.8, 891.0], [76.9, 937.0], [77.0, 958.0], [77.1, 966.0], [77.2, 974.0], [77.3, 982.0], [77.4, 998.0], [77.5, 1014.0], [77.6, 1028.0], [77.7, 1174.0], [77.8, 1239.0], [77.9, 1287.0], [78.0, 1374.0], [78.1, 1411.0], [78.2, 1423.0], [78.3, 1439.0], [78.4, 1461.0], [78.5, 1465.0], [78.6, 1466.0], [78.7, 1468.0], [78.8, 1470.0], [78.9, 1471.0], [79.0, 1472.0], [79.1, 1472.0], [79.2, 1473.0], [79.3, 1474.0], [79.4, 1475.0], [79.5, 1475.0], [79.6, 1476.0], [79.7, 1477.0], [79.8, 1478.0], [79.9, 1479.0], [80.0, 1479.0], [80.1, 1479.0], [80.2, 1480.0], [80.3, 1481.0], [80.4, 1481.0], [80.5, 1482.0], [80.6, 1482.0], [80.7, 1483.0], [80.8, 1484.0], [80.9, 1484.0], [81.0, 1485.0], [81.1, 1485.0], [81.2, 1486.0], [81.3, 1487.0], [81.4, 1487.0], [81.5, 1488.0], [81.6, 1489.0], [81.7, 1490.0], [81.8, 1490.0], [81.9, 1491.0], [82.0, 1491.0], [82.1, 1492.0], [82.2, 1493.0], [82.3, 1493.0], [82.4, 1494.0], [82.5, 1495.0], [82.6, 1496.0], [82.7, 1496.0], [82.8, 1497.0], [82.9, 1497.0], [83.0, 1498.0], [83.1, 1498.0], [83.2, 1499.0], [83.3, 1499.0], [83.4, 1500.0], [83.5, 1501.0], [83.6, 1501.0], [83.7, 1502.0], [83.8, 1502.0], [83.9, 1503.0], [84.0, 1503.0], [84.1, 1504.0], [84.2, 1504.0], [84.3, 1504.0], [84.4, 1505.0], [84.5, 1506.0], [84.6, 1506.0], [84.7, 1506.0], [84.8, 1507.0], [84.9, 1507.0], [85.0, 1508.0], [85.1, 1508.0], [85.2, 1509.0], [85.3, 1509.0], [85.4, 1509.0], [85.5, 1510.0], [85.6, 1510.0], [85.7, 1511.0], [85.8, 1511.0], [85.9, 1511.0], [86.0, 1512.0], [86.1, 1512.0], [86.2, 1512.0], [86.3, 1513.0], [86.4, 1513.0], [86.5, 1513.0], [86.6, 1514.0], [86.7, 1514.0], [86.8, 1514.0], [86.9, 1515.0], [87.0, 1515.0], [87.1, 1515.0], [87.2, 1516.0], [87.3, 1516.0], [87.4, 1516.0], [87.5, 1516.0], [87.6, 1517.0], [87.7, 1517.0], [87.8, 1518.0], [87.9, 1518.0], [88.0, 1518.0], [88.1, 1519.0], [88.2, 1519.0], [88.3, 1519.0], [88.4, 1520.0], [88.5, 1520.0], [88.6, 1520.0], [88.7, 1521.0], [88.8, 1521.0], [88.9, 1521.0], [89.0, 1522.0], [89.1, 1522.0], [89.2, 1523.0], [89.3, 1523.0], [89.4, 1523.0], [89.5, 1524.0], [89.6, 1524.0], [89.7, 1524.0], [89.8, 1525.0], [89.9, 1525.0], [90.0, 1525.0], [90.1, 1526.0], [90.2, 1526.0], [90.3, 1526.0], [90.4, 1527.0], [90.5, 1527.0], [90.6, 1527.0], [90.7, 1528.0], [90.8, 1528.0], [90.9, 1528.0], [91.0, 1529.0], [91.1, 1529.0], [91.2, 1529.0], [91.3, 1530.0], [91.4, 1530.0], [91.5, 1531.0], [91.6, 1531.0], [91.7, 1532.0], [91.8, 1532.0], [91.9, 1533.0], [92.0, 1533.0], [92.1, 1534.0], [92.2, 1535.0], [92.3, 1535.0], [92.4, 1536.0], [92.5, 1536.0], [92.6, 1536.0], [92.7, 1537.0], [92.8, 1538.0], [92.9, 1538.0], [93.0, 1538.0], [93.1, 1539.0], [93.2, 1540.0], [93.3, 1540.0], [93.4, 1541.0], [93.5, 1543.0], [93.6, 1543.0], [93.7, 1544.0], [93.8, 1544.0], [93.9, 1546.0], [94.0, 1547.0], [94.1, 1548.0], [94.2, 1549.0], [94.3, 1550.0], [94.4, 1551.0], [94.5, 1552.0], [94.6, 1554.0], [94.7, 1556.0], [94.8, 1557.0], [94.9, 1558.0], [95.0, 1560.0], [95.1, 1560.0], [95.2, 1562.0], [95.3, 1564.0], [95.4, 1565.0], [95.5, 1566.0], [95.6, 1568.0], [95.7, 1570.0], [95.8, 1572.0], [95.9, 1573.0], [96.0, 1575.0], [96.1, 1577.0], [96.2, 1579.0], [96.3, 1581.0], [96.4, 1585.0], [96.5, 1587.0], [96.6, 1591.0], [96.7, 1593.0], [96.8, 1596.0], [96.9, 1602.0], [97.0, 1605.0], [97.1, 1610.0], [97.2, 1614.0], [97.3, 1616.0], [97.4, 1622.0], [97.5, 1625.0], [97.6, 1631.0], [97.7, 1635.0], [97.8, 1638.0], [97.9, 1642.0], [98.0, 1645.0], [98.1, 1651.0], [98.2, 1657.0], [98.3, 1663.0], [98.4, 1668.0], [98.5, 1684.0], [98.6, 1702.0], [98.7, 1727.0], [98.8, 1983.0], [98.9, 2679.0], [99.0, 2688.0], [99.1, 2693.0], [99.2, 2698.0], [99.3, 2708.0], [99.4, 2716.0], [99.5, 2721.0], [99.6, 2725.0], [99.7, 2730.0], [99.8, 2739.0], [99.9, 2745.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 5341.0, "series": [{"data": [[0.0, 1.0], [600.0, 14.0], [700.0, 25.0], [800.0, 6.0], [900.0, 87.0], [1000.0, 32.0], [1100.0, 14.0], [1200.0, 25.0], [19200.0, 3.0], [1300.0, 22.0], [21500.0, 1.0], [1400.0, 736.0], [1500.0, 1906.0], [1600.0, 246.0], [1700.0, 21.0], [1800.0, 7.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 1.0], [2200.0, 1.0], [2600.0, 55.0], [2700.0, 103.0], [2800.0, 1.0], [200.0, 5297.0], [300.0, 5341.0], [400.0, 110.0], [7400.0, 1.0], [500.0, 21.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1001.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10748.0, "series": [{"data": [[0.0, 10748.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1001.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2333.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.75518564E12, "maxY": 20.0, "series": [{"data": [[1.7551857E12, 20.0], [1.755186E12, 20.0], [1.75518606E12, 20.0], [1.75518588E12, 20.0], [1.75518594E12, 20.0], [1.75518576E12, 20.0], [1.75518582E12, 20.0], [1.75518564E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75518606E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 601.8507314301924, "minX": 20.0, "maxY": 601.8507314301924, "series": [{"data": [[20.0, 601.8507314301924]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[20.0, 601.8507314301924]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1791.8, "minX": 1.75518564E12, "maxY": 38607.4, "series": [{"data": [[1.7551857E12, 38607.4], [1.755186E12, 32510.033333333333], [1.75518606E12, 29749.533333333333], [1.75518588E12, 33508.71666666667], [1.75518594E12, 33440.1], [1.75518576E12, 33740.95], [1.75518582E12, 30932.233333333334], [1.75518564E12, 7779.466666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7551857E12, 8880.016666666666], [1.755186E12, 7380.233333333334], [1.75518606E12, 6855.4], [1.75518588E12, 7751.333333333333], [1.75518594E12, 7735.5], [1.75518576E12, 7774.8], [1.75518582E12, 7392.033333333334], [1.75518564E12, 1791.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75518606E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 537.3457777777786, "minX": 1.75518564E12, "maxY": 640.4185022026429, "series": [{"data": [[1.7551857E12, 537.3457777777786], [1.755186E12, 635.3336898395706], [1.75518606E12, 571.6735751295328], [1.75518588E12, 614.0864260294862], [1.75518594E12, 610.6841836734692], [1.75518576E12, 605.9903602232367], [1.75518582E12, 638.0977042178318], [1.75518564E12, 640.4185022026429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75518606E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 537.3284444444431, "minX": 1.75518564E12, "maxY": 640.3832599118941, "series": [{"data": [[1.7551857E12, 537.3284444444431], [1.755186E12, 635.3288770053476], [1.75518606E12, 571.6678180771452], [1.75518588E12, 584.7422470767676], [1.75518594E12, 610.674489795917], [1.75518576E12, 605.94469812278], [1.75518582E12, 638.0886278697268], [1.75518564E12, 640.3832599118941]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75518606E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.4839857651245554, "minX": 1.75518564E12, "maxY": 15.577092511013259, "series": [{"data": [[1.7551857E12, 2.124], [1.755186E12, 7.449197860962563], [1.75518606E12, 13.683937823834201], [1.75518588E12, 1.4839857651245554], [1.75518594E12, 4.980102040816328], [1.75518576E12, 6.3769660071029985], [1.75518582E12, 7.057661505605983], [1.75518564E12, 15.577092511013259]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75518606E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 272.0, "minX": 1.75518564E12, "maxY": 1500.0, "series": [{"data": [[1.7551857E12, 1500.0], [1.755186E12, 1500.0], [1.75518606E12, 1500.0], [1.75518588E12, 1500.0], [1.75518594E12, 1500.0], [1.75518576E12, 1499.0], [1.75518582E12, 1500.0], [1.75518564E12, 1500.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7551857E12, 336.0], [1.755186E12, 976.9999999999998], [1.75518606E12, 325.0], [1.75518588E12, 329.0], [1.75518594E12, 1421.5000000000002], [1.75518576E12, 385.0], [1.75518582E12, 328.0], [1.75518564E12, 945.2000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7551857E12, 1497.0], [1.755186E12, 1498.0], [1.75518606E12, 1495.0], [1.75518588E12, 1488.8799999999999], [1.75518594E12, 1497.0], [1.75518576E12, 1494.0], [1.75518582E12, 1495.9], [1.75518564E12, 1498.23]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7551857E12, 1161.1999999999998], [1.755186E12, 1481.0], [1.75518606E12, 1412.05], [1.75518588E12, 982.7999999999984], [1.75518594E12, 1482.0], [1.75518576E12, 1480.0], [1.75518582E12, 1420.75], [1.75518564E12, 1482.15]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7551857E12, 276.0], [1.755186E12, 275.0], [1.75518606E12, 274.0], [1.75518588E12, 272.0], [1.75518594E12, 274.0], [1.75518576E12, 276.0], [1.75518582E12, 273.0], [1.75518564E12, 275.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7551857E12, 304.0], [1.755186E12, 301.0], [1.75518606E12, 303.0], [1.75518588E12, 300.0], [1.75518594E12, 299.0], [1.75518576E12, 301.0], [1.75518582E12, 299.0], [1.75518564E12, 307.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75518606E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 1654.0, "series": [{"data": [[2.0, 969.0], [3.0, 696.0], [4.0, 302.5], [5.0, 1243.0], [6.0, 304.0], [7.0, 303.0], [8.0, 320.0], [9.0, 306.0], [10.0, 308.0], [11.0, 301.5], [12.0, 313.5], [13.0, 304.5], [14.0, 300.5], [15.0, 304.5], [16.0, 303.0], [17.0, 306.0], [18.0, 305.5], [19.0, 304.0], [20.0, 301.0], [21.0, 301.5], [22.0, 302.0], [23.0, 303.0], [24.0, 300.0], [25.0, 298.0], [26.0, 301.0], [27.0, 301.0], [28.0, 303.5], [29.0, 303.0], [30.0, 303.0], [31.0, 308.0], [33.0, 301.0], [32.0, 299.0], [35.0, 302.0], [34.0, 300.0], [37.0, 303.0], [36.0, 300.5], [38.0, 300.5], [39.0, 296.0], [40.0, 303.0], [41.0, 301.0], [43.0, 301.5], [42.0, 301.0], [44.0, 303.0], [45.0, 302.0], [46.0, 300.0], [47.0, 303.0], [48.0, 301.0], [49.0, 299.0], [51.0, 302.5], [50.0, 300.0], [53.0, 303.0], [52.0, 302.0], [54.0, 299.0], [55.0, 302.0], [56.0, 298.0], [57.0, 301.0], [58.0, 304.0], [59.0, 298.5], [61.0, 301.0], [60.0, 297.0], [63.0, 298.0], [62.0, 302.0], [65.0, 300.0], [64.0, 301.0], [67.0, 306.0], [66.0, 297.0], [71.0, 300.0], [70.0, 295.0], [68.0, 301.5], [1.0, 309.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1654.0], [4.0, 1507.0], [5.0, 1514.5], [6.0, 1523.0], [8.0, 1515.0], [9.0, 1516.0], [10.0, 1591.0], [11.0, 1540.0], [12.0, 1546.5], [13.0, 1547.0], [14.0, 1567.0], [15.0, 1527.0], [16.0, 1536.5], [17.0, 1527.5], [18.0, 1580.0], [19.0, 1536.0], [20.0, 1533.0], [21.0, 1532.5], [22.0, 1534.0], [23.0, 1539.0], [24.0, 1560.0], [25.0, 1564.0], [26.0, 1552.0], [27.0, 1538.0], [28.0, 1542.5], [29.0, 1529.5], [30.0, 1528.0], [31.0, 1519.0], [33.0, 1535.0], [32.0, 1519.0], [35.0, 1530.5], [34.0, 1528.0], [37.0, 1535.0], [36.0, 1555.0], [38.0, 1532.5], [39.0, 1530.0], [40.0, 1528.0], [41.0, 1538.5], [43.0, 1526.0], [42.0, 1534.0], [45.0, 1530.0], [44.0, 1574.5], [47.0, 1539.0], [46.0, 1527.0], [48.0, 1528.0], [49.0, 1530.5], [51.0, 1532.0], [50.0, 1532.0], [53.0, 1552.5], [52.0, 1529.0], [54.0, 1521.5], [55.0, 1537.0], [56.0, 1525.5], [57.0, 1532.0], [59.0, 1523.0], [58.0, 1522.0], [61.0, 1521.0], [60.0, 1523.0], [63.0, 1521.0], [62.0, 1540.0], [65.0, 1573.5], [64.0, 1524.0], [67.0, 1528.0], [66.0, 1597.0], [71.0, 1526.0], [70.0, 1542.0], [68.0, 1526.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 1654.0, "series": [{"data": [[2.0, 969.0], [3.0, 696.0], [4.0, 302.5], [5.0, 1243.0], [6.0, 304.0], [7.0, 303.0], [8.0, 320.0], [9.0, 306.0], [10.0, 308.0], [11.0, 301.5], [12.0, 313.5], [13.0, 304.5], [14.0, 300.5], [15.0, 304.5], [16.0, 303.0], [17.0, 306.0], [18.0, 305.5], [19.0, 304.0], [20.0, 301.0], [21.0, 301.5], [22.0, 302.0], [23.0, 303.0], [24.0, 300.0], [25.0, 298.0], [26.0, 301.0], [27.0, 301.0], [28.0, 303.5], [29.0, 303.0], [30.0, 303.0], [31.0, 308.0], [33.0, 301.0], [32.0, 299.0], [35.0, 302.0], [34.0, 300.0], [37.0, 303.0], [36.0, 300.5], [38.0, 300.5], [39.0, 296.0], [40.0, 303.0], [41.0, 301.0], [43.0, 301.5], [42.0, 301.0], [44.0, 303.0], [45.0, 302.0], [46.0, 300.0], [47.0, 303.0], [48.0, 301.0], [49.0, 299.0], [51.0, 302.5], [50.0, 300.0], [53.0, 303.0], [52.0, 302.0], [54.0, 299.0], [55.0, 302.0], [56.0, 298.0], [57.0, 301.0], [58.0, 304.0], [59.0, 298.5], [61.0, 301.0], [60.0, 297.0], [63.0, 298.0], [62.0, 302.0], [65.0, 300.0], [64.0, 301.0], [67.0, 306.0], [66.0, 297.0], [71.0, 300.0], [70.0, 295.0], [68.0, 301.5], [1.0, 309.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1654.0], [4.0, 1507.0], [5.0, 1514.5], [6.0, 1522.5], [8.0, 1515.0], [9.0, 1516.0], [10.0, 1591.0], [11.0, 1540.0], [12.0, 1546.5], [13.0, 1547.0], [14.0, 1567.0], [15.0, 1527.0], [16.0, 1536.5], [17.0, 1527.5], [18.0, 1580.0], [19.0, 1536.0], [20.0, 1533.0], [21.0, 1532.5], [22.0, 1534.0], [23.0, 1539.0], [24.0, 1560.0], [25.0, 1564.0], [26.0, 1552.0], [27.0, 1538.0], [28.0, 1542.5], [29.0, 1529.5], [30.0, 1528.0], [31.0, 1519.0], [33.0, 1535.0], [32.0, 1519.0], [35.0, 1530.5], [34.0, 1528.0], [37.0, 1535.0], [36.0, 1555.0], [38.0, 1532.5], [39.0, 1530.0], [40.0, 1528.0], [41.0, 1538.5], [43.0, 1526.0], [42.0, 1534.0], [45.0, 1530.0], [44.0, 1574.5], [47.0, 1539.0], [46.0, 1527.0], [48.0, 1528.0], [49.0, 1530.5], [51.0, 1532.0], [50.0, 1532.0], [53.0, 1552.5], [52.0, 1529.0], [54.0, 1521.5], [55.0, 1537.0], [56.0, 1525.5], [57.0, 1521.0], [59.0, 1523.0], [58.0, 1522.0], [61.0, 1521.0], [60.0, 1523.0], [63.0, 1521.0], [62.0, 1540.0], [65.0, 1573.5], [64.0, 1524.0], [67.0, 1528.0], [66.0, 1597.0], [71.0, 1526.0], [70.0, 1542.0], [68.0, 1526.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 7.9, "minX": 1.75518564E12, "maxY": 37.5, "series": [{"data": [[1.7551857E12, 37.5], [1.755186E12, 31.183333333333334], [1.75518606E12, 28.616666666666667], [1.75518588E12, 32.78333333333333], [1.75518594E12, 32.65], [1.75518576E12, 32.85], [1.75518582E12, 31.216666666666665], [1.75518564E12, 7.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75518606E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.75518564E12, "maxY": 37.5, "series": [{"data": [[1.7551857E12, 37.5], [1.755186E12, 31.166666666666668], [1.75518606E12, 28.95], [1.75518588E12, 32.733333333333334], [1.75518594E12, 32.666666666666664], [1.75518576E12, 32.833333333333336], [1.75518582E12, 31.216666666666665], [1.75518564E12, 7.566666666666666]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.75518588E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.75518576E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75518606E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.75518564E12, "maxY": 32.55, "series": [{"data": [[1.7551857E12, 32.55], [1.755186E12, 25.683333333333334], [1.75518606E12, 24.633333333333333], [1.75518588E12, 26.85], [1.75518594E12, 27.533333333333335], [1.75518576E12, 27.233333333333334], [1.75518582E12, 25.066666666666666], [1.75518564E12, 6.266666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7551857E12, 4.95], [1.755186E12, 5.483333333333333], [1.75518606E12, 4.316666666666666], [1.75518588E12, 5.933333333333334], [1.75518594E12, 5.133333333333334], [1.75518576E12, 5.616666666666666], [1.75518582E12, 6.15], [1.75518564E12, 1.3]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75518606E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.75518564E12, "maxY": 32.55, "series": [{"data": [[1.7551857E12, 32.55], [1.755186E12, 25.683333333333334], [1.75518606E12, 24.633333333333333], [1.75518588E12, 26.85], [1.75518594E12, 27.533333333333335], [1.75518576E12, 27.233333333333334], [1.75518582E12, 25.066666666666666], [1.75518564E12, 6.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7551857E12, 4.95], [1.755186E12, 5.483333333333333], [1.75518606E12, 4.316666666666666], [1.75518588E12, 5.933333333333334], [1.75518594E12, 5.133333333333334], [1.75518576E12, 5.616666666666666], [1.75518582E12, 6.15], [1.75518564E12, 1.3]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75518606E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

