import React from 'react'
import styled from 'styled-components'
const HeadinStyle = styled.h1`
    color:green;
    border:1px solid red
    `
const ButtonStyle = styled.button`
    background-color:black;
    color:white;
    padding:5px
    `
const PStyle = styled.p({
    color: "red",
    fontSize: "20px"
})
const SpanStyle=styled.span({
    textDecoration:"underline",
    color:"black"
})
export default function Home() {


    return (
        <>
            <HeadinStyle>Home</HeadinStyle>
            <ButtonStyle>Save</ButtonStyle>

            <PStyle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae alias repudiandae unde reiciendis facilis amet quas. <SpanStyle>Ducimus,</SpanStyle> laborum nemo quasi a pariatur ad modi laudantium molestiae quod qui reprehenderit? Iste.
            </PStyle>
        </>

    )
}
