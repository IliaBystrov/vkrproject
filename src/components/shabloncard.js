import React from 'react'

class ShablonCard extends React.Component{
    render(){
        const link ='some link';
        const id = 11;
        return(
            <div className = "card">
                <div className='title_date'>
                    <h1>{this.props.cardtitle}</h1>
                    <h1>{this.props.carddate}</h1>
                </div>
                <div className='cardbuttons'>
                    <button id="cardbutton" onClick={() => this.docopy(id)}>
                        <img src={this.props.image1} alt='copy' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => this.getlink(link)}>
                        <img src={this.props.image2} alt='link' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => this.gotoset(id)}>
                        <img src={this.props.image3} alt='settings' id="cardimg"></img>
                    </button>
                    <button id="cardbutton" onClick={() => this.dodelete(id)}>
                        <img src={this.props.image4} alt='delete' id="cardimg"></img>
                    </button>
                </div>
                
            </div>
        )
    }

    docopy (id) {
        console.log("Copy by id = ", id);
    }
    getlink (link) {
        console.log("Link = ", link);
    }
    gotoset (id) {
        console.log("Settings by id = ", id);
    }
    dodelete (id) {
        console.log("Delete where id = ", id);
    }
}

export default ShablonCard