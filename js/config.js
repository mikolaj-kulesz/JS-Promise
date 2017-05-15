var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

getJSON('json/main.json', function(err, data) {
    if (err != null) {
        alert('Something went wrong: ' + err);
    } else {
        console.log('Your query count: ' , data);
        findRightObjs(data, "item 02")

    }
});


findRightObjs = function (data, name) {
    rightObjs = []
    data.forEach(function(item) {
        if(item.name == name){
            rightObjs.push(item);
        }
    });
    console.log('rightObjs', rightObjs);
    prepareList(rightObjs);
}

prepareList = function (data) {
    var orderList = document.querySelector('.order-list');
    data.forEach(function(item) {
        addHTML(orderList, item);
    });
}

addHTML = function (wrapper, item) {
    var contentHTML;
    contentHTML = '<h2>' + item.name + '</h2>';
    contentHTML += '<p><strong>Weight: </strong>' + item.weight + '</p>';
    contentHTML += '<p><strong>Price: </strong>' + item.price + '</p>';

    wrapper.innerHTML += contentHTML;
}