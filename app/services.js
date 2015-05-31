angular.module( 'bookClub.services', [] )

.factory('Books',function(){

  var books = [
    {
    id: 0,
    name: 'Applied Probability',
    classNo: 'CS394',
    condition: 'Good',
    price: '35',
    contact: 'a@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '04-19-2015'
  },{
    id: 1,
    name: 'Circuit Theory',
    classNo: 'ECE276',
    condition: 'ok',
    price: '45',
    contact: 'b@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '05-19-2015'
  },{
    id: 2,
    name: 'Applied Probability',
    classNo: 'CS394',
    condition: 'bad',
    price: '15',
    contact: 'c@mail.umkc.edu',
    details: 'Book ok. I bought it used',
    date: '06-19-2015'
  },{
    id: 3,
    name: 'Engineering Mechanics',
    classNo: 'ECE250',
    condition: 'Good',
    price: '35',
    contact: 'd@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '06-19-2015'
  },{
    id: 4,
    name: 'Programming 2',
    classNo: 'CS201',
    condition: 'Good',
    price: '35',
    contact: 'e@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '07-19-2015'
  },{
    id: 5,
    name: 'Digital Design',
    classNo: 'ECE125',
    condition: 'poor',
    price: '15',
    contact: 'f@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '08-19-2015'
  },{
    id: 6,
    name: 'Micro Architecture',
    classNo: 'CS280',
    condition: 'Good',
    price: '55',
    contact: 'g@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '04-19-2015'
  },{
    id: 7,
    name: 'Programming 1',
    classNo: 'CS101',
    condition: 'Poor',
    price: '25',
    contact: 'h@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '12-19-2015'
  },{
    id: 8,
    name: 'Applied Probability',
    classNo: 'CS394',
    condition: 'Good',
    price: '35',
    contact: 'i@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '04-19-2015'
  },{
    id: 9,
    name: 'Econ 102',
    classNo: 'EC102',
    condition: 'Good',
    price: '35',
    contact: 'j@mail.umkc.edu',
    details: 'Book still like new. I barely used it',
    date: '11-19-2015'
  }
  ];

return{
  all: function(){
    return books;
  },
  get: function(bookId){
    for(var i=0; i < books.length; i++){
      if (books[i].id === parseInt(bookId)){
        return books[i];
      }
    }
  return null;
  }
};

})
;
