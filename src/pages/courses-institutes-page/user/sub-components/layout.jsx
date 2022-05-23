import React from 'react';


export const Heading = ({content, className}) => {
    return (
        <h5 className={`${className} md:mt-10 font-dm-sans font-semibold text-2xl capitalize  text-violet`}> 
            {content}
        </h5>
    )
}

export const Paragraph = ({className, content,children}) => {
    return (
        <p className={`${className} my-5 font-dm-sans text-light-black`}>
            {content}
            {children}
        </p>
    )
}

export const DottedParagraph = ({ content, className, onClick }) => {
    return (
        <span onClick={onClick} className={`${className} mb-5 border-b border-violet border-dashed text-violet cursor-pointer`}>
            {content}
        </span>
    )
}

export const VioletParagrapgh = ({className, content, onClick}) => {
    return(
        <p onClick={onClick} className={`${className} inline-block cursor-pointer text-violet font-medium font-dm-sans w-auto mb-5`}>
            {content}
        </p>
    )
}

export const Flex = ({children, className}) => {
    return (
        <div className={`${className} flex justify-between items-center flex-col md:flex-row`}>
            {children}
        </div>
    )
}