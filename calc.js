/* DATA */


var avgOrdersLimits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var monthlyOrderLimits = [100, 250, 500, 700, 1000, 1200, 1500, 1700, 2000, 2200, 2500, 2700, 3000, 3200, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 20000];

var priceData = [[1.8, 2.05, 2.3, 2.55, 2.8, 3.05, 3.3, 3.55, 3.8, 4.05, 4.3, 4.55, 4.8, 5.05, 5.3, 5.55, 5.8, 6.05, 6.3, 6.55],
                       [1.8, 2.05, 2.3, 2.55, 2.8, 3.05, 3.3, 3.55, 3.8, 4.05, 4.3, 4.55, 4.8, 5.05, 5.3, 5.55, 5.8, 6.05, 6.3, 6.55],
                       [1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5],
                       [1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5],
                       [1.7, 1.95, 2.2, 2.43, 2.66, 2.89, 3.12, 3.35, 3.58, 3.81, 4.04, 4.27, 4.5, 4.73, 4.96, 5.19, 5.42, 5.65, 5.88, 6.11],
                       [1.7, 1.95, 2.2, 2.43, 2.66, 2.89, 3.12, 3.35, 3.58, 3.81, 4.04, 4.27, 4.5, 4.73, 4.96, 5.19, 5.42, 5.65, 5.88, 6.11],
                       [1.65, 1.9, 2.15, 2.37, 2.59, 2.81, 3.03, 3.25, 3.47, 3.69, 3.91, 4.13, 4.35, 4.57, 4.79, 5.01, 5.23, 5.45, 5.67, 5.89],
                       [1.65, 1.9, 2.15, 2.37, 2.59, 2.81, 3.03, 3.25, 3.47, 3.69, 3.91, 4.13, 4.35, 4.57, 4.79, 5.01, 5.23, 5.45, 5.67, 5.89],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.6, 1.85, 2.1, 2.3, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5, 3.7, 3.9, 4.1, 4.3, 4.5, 4.7, 4.9, 5.1, 5.3, 5.5],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.5, 1.75, 1.97, 2.17, 2.37, 2.57, 2.77, 2.97, 3.17, 3.37, 3.57, 3.77, 3.97, 4.17, 4.37, 4.57, 4.77, 4.97, 5.17, 5.37],
                       [1.4, 1.6, 1.76, 1.91, 2.06, 2.21, 2.36, 2.51, 2.66, 2.81, 2.96, 3.11, 3.26, 3.41, 3.56, 3.71, 3.86, 4.01, 4.16, 4.31],
                       [1.4, 1.6, 1.76, 1.91, 2.06, 2.21, 2.36, 2.51, 2.66, 2.81, 2.96, 3.11, 3.26, 3.41, 3.56, 3.71, 3.86, 4.01, 4.16, 4.31],
                       [1.4, 1.6, 1.76, 1.91, 2.06, 2.21, 2.36, 2.51, 2.66, 2.81, 2.96, 3.11, 3.26, 3.41, 3.56, 3.71, 3.86, 4.01, 4.16, 4.31],
                       [1.4, 1.6, 1.76, 1.91, 2.06, 2.21, 2.36, 2.51, 2.66, 2.81, 2.96, 3.11, 3.26, 3.41, 3.56, 3.71, 3.86, 4.01, 4.16, 4.31],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69],
                       [1.35, 1.5, 1.65, 1.77, 1.89, 2.01, 2.13, 2.25, 2.37, 2.49, 2.61, 2.73, 2.85, 2.97, 3.09, 3.21, 3.33, 3.45, 3.57, 3.69]];


var uniqueProductLimits = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
var storageLimits = [1, 5, 10, 15, 20, 25, 50, 75, 100, 150, 200, 300, 400, 500, 600];

var storageData = [[10.8, 50, 100, 155, 210, 260, 530, 800, 1069, 1515.5, 2023.5, 2847.5, 3527.5, 4405, 5245],
                        [22.5, 62, 114, 165, 218, 272, 541.5, 813.5, 1080.5, 1528.5, 2035.5, 2867.5, 3546.5, 4442.5, 5313.5],
                        [46.5, 85, 138, 190, 243, 297, 566.5, 838.5, 1105, 1553.5, 2072, 2892.5, 3571.5, 4467.5, 5338.5],
                        [81.5, 120, 172, 225, 278, 332, 601.5, 873.5, 1140.5, 1588.5, 2107, 2927.5, 3606.5, 4502.5, 5373.5],
                        [115, 152, 206, 260, 313, 367, 636.5, 908.5, 1175.5, 1623.5, 2142, 2962.5, 3641.5, 4537.5, 5408.5],
                        [150, 191, 246, 300, 353, 407, 676.5, 948.5, 1215.5, 1663.5, 2182, 2997.5, 3681.5, 4577.5, 5448.5],
                        [191, 232, 287, 340, 393, 447.1, 716.5, 988.5, 1255.5, 1703.5, 2222, 3037.5, 3721.5, 4617.5, 5488.5],
                        [240, 282, 336, 390, 443, 497, 766.5, 1033.5, 1305.5, 1753.5, 2272, 3087.5, 3771.5, 4667.5, 5538.5],
                        [288, 332, 386, 440, 493, 547, 816.5, 1083.5, 1355.5, 1803.5, 2322, 3137.5, 3821.5, 4717.5, 5588.5],
                        [344, 386, 441, 495, 548, 602, 871.5, 1138.5, 1410.5, 1858.5, 2377, 3192.5, 3876.5, 4772.5, 5643.5],
                        [400, 441, 497, 550, 603, 657, 926.5, 1193.5, 1465.5, 1913.5, 2432, 3247.5, 3931.5, 4827.5, 5698.5],
                        [700, 741, 790, 850, 903, 957, 1221.5, 1493.5, 1765.5, 2208.5, 2732, 3547.5, 4231.5, 5102.5, 5973.5],
                        [999, 1040, 1080, 1150, 1200.1, 1254.5, 1521.5, 1793.5, 2060.5, 2508.5, 3032, 3847.5, 4531.5, 5402.5, 6263.5]];




/*SET SLIDERS*/

var orderSlider = document.getElementById('orderSlider');
var itemSlider = document.getElementById('itemSlider');
var spaceSlider = document.getElementById('spaceSlider');
var productSlider = document.getElementById('productSlider');


/*CREATE SLIDERS*/

noUiSlider.create(orderSlider, {
    start: [1200],
    range: {
        'min': 1,
        '40%': 2000,
        'max': 20000
    }
});
noUiSlider.create(itemSlider, {
    start: [15],
    range: {
        'min': 1,
        'max': 20
    }
});
noUiSlider.create(spaceSlider, {
    start: [250],
    range: {
        'min': 0.4,
        '30%': 80,
        '50%': 200,
        'max': 600
    }
});
noUiSlider.create(productSlider, {
    start: [1000],
    range: {
        'min': 1,
        '50%': 600,
        'max': 2000,
    }
});

/*CREATE TOOLTIPS*/

$(".noUi-handle").append("<div class='tooltip'></div>");

/* DEFINE CALCULATOR VARIABLES */

var ordersPerMonth;
var itemsPerOrder;
var storageSpace;
var uniqueProducts;
var total;
var totalPerMonth;



/*FUNCTIONS FOR SLIDING*/

orderSlider.noUiSlider.on('update', function () {
    ordersPerMonth = Math.round(orderSlider.noUiSlider.get());
    $("#orderSlider .noUi-handle div").text(addCommas(ordersPerMonth));

    calculate();
});

itemSlider.noUiSlider.on('update', function () {
    itemsPerOrder = Number(itemSlider.noUiSlider.get()).toFixed(1);
    $("#itemSlider .noUi-handle div").text(itemsPerOrder);
    calculate();
});

spaceSlider.noUiSlider.on('update', function () {
    if (Number(spaceSlider.noUiSlider.get()) < 1) {
        storageSpace = Number(spaceSlider.noUiSlider.get()).toPrecision(2);
    } else if (Number(spaceSlider.noUiSlider.get()) < 1000) {
        storageSpace = Number(spaceSlider.noUiSlider.get()).toPrecision(3);
    } else {
        storageSpace = Number(spaceSlider.noUiSlider.get()).toPrecision(4);
    }
    $("#spaceSlider .noUi-handle div").text(storageSpace);

    calculate();
});

productSlider.noUiSlider.on('update', function () {
    uniqueProducts = Math.round(productSlider.noUiSlider.get());
    $("#productSlider .noUi-handle div").text(uniqueProducts);
    calculate();
});


/* FUNCTION FOR CALCULATION */


function calculate() {

    totalPerOrder = findData(monthlyOrderLimits, avgOrdersLimits, priceData, ordersPerMonth, itemsPerOrder);
    totalStorage = findData(uniqueProductLimits, storageLimits, storageData, uniqueProducts, storageSpace);
    totalOrders = Number(totalPerOrder * ordersPerMonth);
    totalPerMonth = Number(totalOrders + totalStorage);


    totalOrders = round(totalOrders);
    totalStorage = round(totalStorage);
    totalPerMonth = round(totalPerMonth);


    $("#ordersFulfilled").text('(' + addCommas(ordersPerMonth) + ' orders, £' + round(totalPerOrder) + ' per order)');

    $("#storageSpace").text('(' + storageSpace + ' m³)');


    $('#totalPerOrder').text('£' + totalPerOrder);
    $('#totalOrders').text('£' + totalOrders);
    $('#totalStorage').text('£' + totalStorage);
    $('#totalPerMonth').text('£' + totalPerMonth);


    function findData(rowLimits, columnLimits, data, rowInput, columnInput) {
        rowIndex = getIndex(rowInput, rowLimits);
        columnIndex = getIndex(columnInput, columnLimits);
        row = data[rowIndex];
        output = row[columnIndex];

        return output;


        function getIndex(input, limits) {
            arrayLength = limits.length;
            index = 0;
            for (i = 0; i < arrayLength; i++) {
                if (input > (limits[i - 1])) {
                    index = i;
                } else {};
            };
            return index;
        }

    };


    function round(numb) {
        if (numb > 100) {
            return addCommas(Math.round(numb));
        } else {
            return Number(numb).toFixed(2);
        }

    };

};

/* GET COMMAS FUNCTION */

function addCommas(nStr) {


    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    if (Number(nStr) > 999) {
        return x1 + x2;
    } else {
        return nStr;
    }

}
