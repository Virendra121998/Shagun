import React from 'react';

class List extends React.Component{

    state={

    }
    componentDidMount(){
        const json=require('./college.json');
        var string=JSON.stringify(json);
        var obj=JSON.parse(string);
        obj.colleges.forEach((element)=>{
            console.log(element);
        })
    }
    render(){
        return null;
    }
}

export default List;