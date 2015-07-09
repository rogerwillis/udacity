var Cat = function () {

    var self = this;
    this.clickCount = ko.observable(0);

    this.level = ko.observable('Newborn');
    this.level2 = ko.observable('baby');
    this.level3 = ko.observable('toddler');
    this.level4 = ko.observable('tween');
    this.level5 = ko.observable('all grown up');
    this.name = ko.observable('Roger');
    this.imgSrc = ko.observable('cat.jpg');

    //
    //add nickname
    this.nicknames = ko.observableArray(['kitty lefleur', 'bobbie']);


    //calc levels
    this.levels = ko.computed(
        function () {
            var level;
            var clicks = self.clickCount();
            console.log(clicks);
            if (clicks < 3) {
                level = 'Newborn';
            }

            else if (clicks < 10) {
                level = 'Toddler';
            }

            else if (clicks < 20) {
                level = 'Child';
            }

            else if (clicks < 29) {
                level = 'Teen';
            }

            else if (clicks < 100) {
                level = 'All Grown Up';
            }

            return level;

        }, this);


    this.getCats = function() {
        


    }
}


var ViewModel = function () {

    this.currentCat = ko.observable(new Cat());
    //increment the counter
    this.incrementCounter = function () {

        this.currentCat().clickCount(this.currentCat().clickCount() + 1);

    }

}

ko.applyBindings(new ViewModel());