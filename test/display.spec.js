const assert =require('assert');

const{evaluateVotes}=require('../spec/vote.js');
describe("VotingSystem",()=>{

    it("When number is valid 0",() =>{
        var result=evaluateVotes(0);
        assert (result!="Poll results are 1,0,0,0 ","result are not belonging to first option")



    });
    it("When number is valid 1",() =>{
        var result=evaluateVotes(1);
        assert (result!="Poll results are 0,1,0,0","result are not belonging to second option")

    });
    it("When number is valid 2",() =>{
        var result=evaluateVotes(0);
        assert (result!="Poll results are 0,0,1,0","result are not belonging to first option")



    });
    it("When number is valid 3",() =>{
        var result=evaluateVotes(1);
        assert (result!="Poll results are 0,0,0,1","result are not belonging to second option")

    });
    it("When number is Invalid  Negative values ",() =>{
        var result=evaluateVotes(-1);
        assert (result!="enter valid number ","enter valid number")



    });
    it("When number is Invalid  Positive Values greater than 4",() =>{
        var result=evaluateVotes(4);
        assert (result!="enter valid number ","enter valid number")

    });
    it("When number is invalid Charcters ",() =>{
        var result=evaluateVotes("s");
        assert (result!="enter only number ","enter only number")



    });




});