import React from 'react';


// used materialize form not sure how to fix it
const ContactUs = () => {
    return (
        <div> 
            <div>
                <h1>Contact Us</h1>
                <h3>613-861-1566</h3>
            </div>
           <div>
           <div class="row">
                <form class="col s12">
                    <div class="row">
                    <div class="input-field col s6">
                        <input id="input_text" type="text" data-length="10" />
                        <label for="input_text">First Name</label>
                        
                    </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Textarea</label>
                    </div>
                    </div>
                </form>
            </div>
           </div>
        </div>
    );
};

export default ContactUs;