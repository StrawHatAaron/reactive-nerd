import React, {Component} from 'react';

const sections = [{title:'Home', url:'/'},
                {title:'Services', url:'/services'},
                {title:'Blog', url:'/blog'},
                {title:'Portfolio', url:'/portfolio'},
                {title:'Contact', url:'/contact'}]


const ToolBarButtons = sections.map((section) => {
  return (
    <li>
      <a href={section.url}>{section.title}</a>
    </li>
  )
})

export default ToolBarButtons;
