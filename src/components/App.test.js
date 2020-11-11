import React from 'react';
import { shallowToJson  } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App';

// --------- 1 ------ separate unit test - TDD
/*
const app = shallow(<App/>);

it('App renders correctly', () => {
    expect(shallowToJson(app)).toMatchSnapshot();
});

it('Initializes the `state` with an empty list of gifts', ()=>{
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking `add gift` button', ()=> {

    // we are assuming that we already clicked the button
    //by clicking it we're gonna change the state of our `gifts`

    // find button

    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{id: 1}]);
});

// test polution (the previous test polutes the next one)
it('add a new gift to the rendered list when clicking the  `add gift` button', () => {
    app.find('.btn-add').simulate('click');

    // to hold our gifts we'll have a  overall wrapping div element

    //children() returns an array of  children of the found component

    expect(app.find('.gift-list').children().length).toEqual(2);
})


*/

// ---- BDD -------
describe('App', () => {
    const app = shallow(<App/>);

    it('App renders correctly', () => {
        expect(shallowToJson(app)).toMatchSnapshot();
    });

    it('Initializes the `state` with an empty list of gifts', ()=>{
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add-gift` button', () => {
        const id = 1;
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })

        afterEach(()=> {
            // reset gifts to an []
            app.setState({gifts: []})
        })

        it('adds a new gift to `state`', ()=> {
            expect(app.state().gifts).toEqual([{id}]);
        });

        it('add a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        })

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        })

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('removes the gift from state', ()=> {
                expect(app.state().gifts).toEqual([])
            })
        })
    });

})


