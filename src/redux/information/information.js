const INITAIL={
    sections:[
        {
        title:'Mens',
        imageUrl:'https://i.pinimg.com/originals/d7/81/a6/d781a641e05de54053e810bfc82b3170.jpg',
        id:1,
        URL:'shop/mens'
       },
       {
        title:'Girls',
        imageUrl:'https://i.pinimg.com/originals/0a/93/e2/0a93e2a24cf7f3efa66b53f7b312ede1.jpg',
        id:2,
        URL:'shop/girls'

        },
        {
        title:'Actor',
        imageUrl:'https://i.pinimg.com/originals/3e/06/2b/3e062bdee878a03a79d3eb2ad4c964dd.jpg',
        id:3,
        URL:'shop/actors'

        }
    ]
}

const information=(state=INITAIL,action)=>{
    switch (action.type) {
       
        default:
            return state
    }
}

export default information