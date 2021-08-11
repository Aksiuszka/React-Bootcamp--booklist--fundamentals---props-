import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const books =[
{
  img:'https://images-na.ssl-images-amazon.com/images/I/51Tg0DASz8L.jpg',
  title:'Folwark Zwierzęcy',
  author:'George Orwell'
},

{
  img:'https://images-na.ssl-images-amazon.com/images/I/31aaCfERsSL._SX280_BO1,204,203,200_.jpg',
  title:'Marsjanin',
  author:'Andy Weir'
},
{
  img:'https://images-na.ssl-images-amazon.com/images/I/419kvKhJbRL._SX358_BO1,204,203,200_.jpg',
  title:'The Resurrectionist: The Lost Work and Writings of Dr. Spencer Black',
  author:'E. B. Hudspeth'
},
{
  img:'https://images-na.ssl-images-amazon.com/images/I/51nOdhcOEKL._SX333_BO1,204,203,200_.jpg',
  title:'Metro 2035',
  author:'Dmitry Glukhovsky'
},
{
  img:'https://images-na.ssl-images-amazon.com/images/I/51Dmd8L6ykL._SX325_BO1,204,203,200_.jpg',
  title:'Zgromadzenie cieni',
  author:'V. E. Schwab '
},
{
  img:'https://images-na.ssl-images-amazon.com/images/I/51rGHSSyvxL._SX301_BO1,204,203,200_.jpg',
  title:'Salems Lot',
  author:'Stephen King'
},

{
  img:'https://images-na.ssl-images-amazon.com/images/I/717hRhPPQWL.jpg',
  title:'Smętarz dla zwierząt',
  author:'Stephen King'
},
];

const Booklist = () => {
  return(
    <section>
      <div className="entry">
        
       {books.map((book)=>{
         const {img,author, title} = book;
         return <div class="bookie">
           <h3>{title}</h3>
           <h6>{author}</h6>
           <img src={img} alt="xxx"/>
         </div>
       })  }
         
      </div>
    </section>
  );
}



const Book = ({img, title, author, children}) => {
  return (
    <div className="bookie">
    <img className="book" src={img} alt="xxx"/>
    <h2 className="title">{title}</h2>
    <h4 className="author">{author}</h4>
    
    </div>
  )
};


ReactDom.render(<Booklist/>,document.getElementById('root')); 