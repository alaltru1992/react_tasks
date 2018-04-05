import React from 'react'
import {shallow, render, mount} from 'enzyme'
import articles from '../../fixtures'
import Comments ,{CommentList} from "./comment-list"
import Article from "../article/index"

describe('Comment List', () => {

    it('CommentList', () => {
       const test = shallow(< CommentList comment = {articles[0].comments} />);
       expect(test.find('.comment-list').length).toEqual(0)
    });

    it('CommentList2', () => {
        const test = render(< Comments comment = {articles[0].comments} />);
        expect(test.find('.comment-list').length).toEqual(0)
    });

    it('CommentList3', () => {
        const test = mount(< Article article={articles[0]} />);
        expect(test.find('.test-comment').length).toEqual(0);
        test.find('comment-list').at(0).simulate('click');
        expect(test.find('.comment-list').length).toEqual(1)
    });

});



