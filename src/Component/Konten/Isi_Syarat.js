import React, { Component } from "react";

class Isi extends Component{
    render(){
        return(
            <div className="delivery">
                    <div className="delivery-info w-richtext">
                        <h2>Delivery Info</h2>
                        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>
                        <h3>What’s a Rich Text element?</h3>
                        <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                        <h4>Static and dynamic content editing</h4>
                        <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. </p>
                        <ul>
                            <li>Beautifully Designed</li>
                            <li>100% Responsive</li>
                            <li>CMS Content</li>
                            <li>Smooth Animations</li>
                        </ul>
                        <p>For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                        <h4>How to customize formatting for each rich text</h4>
                        <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a className is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
                    </div>
                    <div className="question">
                        <h5 className="question-heading">Can&#x27;t Find the Answer to Your Question?</h5><a href="/contacts" className="button small w-button">Contact Us</a>
                    </div>
            </div>
        )
    }
}

export default Isi;