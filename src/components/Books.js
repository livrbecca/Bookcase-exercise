import React from 'react';

const Book = (props) => {
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
       })
    let amount = () => {
        if (props.saleInfo.hasOwnProperty('retailPrice')){
            let amount = formatter.format(props.saleInfo.retailPrice.amount);
            return amount
        }else{
            let amount = 'No Amount Set'; 
            return amount
        }
    }
 return (
 <div>
 <h1>{props.volumeInfo.title}</h1>
 <h2> {props.volumeInfo.authors} </h2>
 <img src={props.volumeInfo.imageLinks.smallThumbnail} alt='book covers'></img>
 <h2>{props.volumeInfo.description}</h2>
 <h2>Amount: {amount()}</h2>
 <a href={props.selfLink}>Click Here to Buy</a>
 </div>
 );
}






// const book = books[0]; 
// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: { amount}}} = book;

// const element = <Fragment>
//     <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;

// ReactDOM.render(element,document.getElementById('root'));



export default Book;