var url = "http://www.uti.edu?utm_medium=display_retargeting&utm_source=cadreon&utm_campaign=CMP-01016-S2L0G5&utm_term=Desktop&utm_content=CPM&c3ch=Display&c3nid=N4506.245881.CADREON-119146749#";
var url2 = "http://www.uti.edu?utm_medium=display_retargeting&utm_source=cadreon&utm_campaign=CMP-01016-S2L0G5&utm_term=Desktop&utm_content=CPM&c3ch=Display&c3nid=N4506.245881.CADREON-119146749#";
var URIComponentEncoded = encodeURIComponent(url);
var URIEncoded = encodeURI(url2);

$('.encode').append('URIComponentEncoded - <br /><br /> ' + URIComponentEncoded);
$('.encode2').append('URIEncoded - <br /><br /> ' + URIEncoded);

var model = {
    currentCat: null,
    adminViewVisible:null,
    cats: [
   {
       name: 'Purr',
       imgSrc: 'cat.jpg',
       clickCount: '0'
   },
{
    name: 'Fect',
    imgSrc: 'cat2.jpg',
    clickCount: '0'
},
{
    name: 'Kittys',
    imgSrc: 'cat3.jpg',
    clickCount: '0'
},
{
    name: 'Morpheus',
    imgSrc: 'cat4.jpg',
    clickCount: '0'
},
{
    name: 'Trinity',
    imgSrc: 'cat5.jpg',
    clickCount: '0'
}
    ]

};


var octupus = {
    init: function() {
        model.currentCat = model.cats[0];
        model.adminViewVisible = false;
        catListView.init();
        catView.init();
        catAdminView.init();
    },

    getCurrentCat: function () {
        console.log(model.currentCat);
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    updateCurrentCat: function (name, pic, clicks) {
        model.currentCat.name = name;
        model.currentCat.imgSrc = pic;
        model.currentCat.clickCount = clicks;
    },

    showAdmin: function() {

        model.adminViewVisible = true;

    },

      hideAdmin: function() {

        model.adminViewVisible = false;

    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }

};


var catListView = {

    init: function () {
        
        this.render();
    },
    render: function ()  {
        var cat;
        var cats = octupus.getCats();

        for (var i = 0; i < cats.length; i++) {
            cat = cats[i];

            var elem = document.createElement('li');
            elem.textContent = cat.name;

            // ... and when we click, alert the value of `num`
            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    if (!$('.admin').hasClass('hidden')) {
                        $('.admin').addClass('hidden');
                    }
                    octupus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            $('.cat-list').append(elem);


        };
    }

}


var catView = {

    init: function () {
       

        this.details = $('.cat-details');
        this.name = $('.cat-name');
        this.imgSrc = $('.cat-pic').attr('src');
        this.clickCount = $('.cat-click-count');

        //admin
        this.admin = $('.admin');
        this.adminBtn = $('button.btn');
        this.adminName = $('input#name');
        this.imgSrc = $('input#pic');
        this.clicks = $('input#clicks');

        this.name.on('click', function() {
           
            octupus.incrementCounter();

        });

        this.adminBtn.on('click', function () {

          var currentCat =  octupus.getCurrentCat();

            if ($('.admin').hasClass('hidden')) {
                $('.admin').removeClass('hidden');
            }
           
            $('input#name').val(currentCat.name);
            $('input#pic').val(currentCat.imgSrc);
            $('input#clicks').val(currentCat.clickCount);
        });

      
        this.render();

    },

    render: function () {
        
        var currentCat = octupus.getCurrentCat();
       
        $('.cat-name').html(currentCat.name);
        $('.cat-pic').attr('src', currentCat.imgSrc);
        $(this.clickCount).text(currentCat.clickCount);

    }
}

var catAdminView = {
    
    init: function() {

        var save = $('#save');
       this.name = $('input#name').val();


       save.on('click', function () {
           console.log('save!');
           octupus.showAdmin();
           octupus.updateCurrentCat($('input#name').val(), $('input#pic').val(), $('input#clicks').val());
           
       });





        this.render();
    },
    render: function() {
        
    }
}

octupus.init();