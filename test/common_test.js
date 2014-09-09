var chai = require('chai'),
    should = chai.should(),
    Common = require('../common');

describe('Common', function(){
    var cmn;

    before(function(){
        cmn = Common();
    });

    describe('constructor', function(){
        it('Should return a Common class instance even when not called with new operator', function(){
            cmn.should.be.an.instanceOf(Common);
        });
    });

    describe('showNumbers', function(){

        it('Should return the given number from is equal to, and not divisible by 3 or 5', function(){
            cmn.showNumbers(8, 8).should.equal('8\n');
        });

        it('Should return the fizz if number from is equal to, and not divisible by 3', function(){
            cmn.showNumbers(3, 3).should.equal('fizz\n');
        });

        it('Should return the buzz if number from is equal to, and not divisible by 5', function(){
            cmn.showNumbers(5, 5).should.equal('buzz\n');
        });

        it('Should return the fizzbuzz if number from is equal to, and not divisible by 3 and 5', function(){
            cmn.showNumbers(15, 15).should.equal('fizzbuzz\n');
        });

        it('Should return a string with numbers in the given range, for numbers divisible by 3 replace with fizz, for numbers divisible by 5 replace with buzz and if is divisible by 3 and 5 replace with fizzbuzz', function(){
            cmn.showNumbers(8, 15).should.equal('8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n');
        });

        it('Should return an empty string if from is greater that to', function(){
            cmn.showNumbers(100, 5).should.equal('');
        });

        it('Should throw an error if any paramater is not a number', function(){
            should.Throw(function(){
                cmn.showNumbers('', null);
            });
        });
    });
});
