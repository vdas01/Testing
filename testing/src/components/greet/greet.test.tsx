import { render,screen } from "@testing-library/react"
import Greet from "./greet"

// test('Greet renders correctly',()=>{
//     render(<Greet/>)
//    const textElement =  screen.getByText('Hello')
//    expect(textElement).toBeInTheDocument();
// })

//TDD:-
// Greet should render the test hello and if a name is passed into the component it should render hello followed by the name

describe('Greet',()=>{
  
    test('renders correctly',()=>{
        render(<Greet/>)
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })

    // it('renders correctly',()=>{
    //     render(<Greet/>)
    //     const textElement = screen.getByText('Hello');
    //     expect(textElement).toBeInTheDocument();
    // })

    // test.only('renders correctly',()=>{
    //     render(<Greet/>)
    //     const textElement = screen.getByText('Hello');
    //     expect(textElement).toBeInTheDocument();
    // })

    // test.skip('renders correctly',()=>{
    //     render(<Greet/>)
    //     const textElement = screen.getByText('Hello');
    //     expect(textElement).toBeInTheDocument();
    // })
    
    describe('Nested',()=>{

        test('renders with a name',()=>{
            render(<Greet name='Vishal'/>)
            const textElement = screen.getByText('Hello Vishal');
            expect(textElement).toBeInTheDocument();
        })
        
    })

    // describe.only('Nested',()=>{

    //     test('renders with a name',()=>{
    //         render(<Greet name='Vishal'/>)
    //         const textElement = screen.getByText('Hello Vishal');
    //         expect(textElement).toBeInTheDocument();
    //     })
        
    // })


    // describe.skip('Nested',()=>{

    //     test('renders with a name',()=>{
    //         render(<Greet name='Vishal'/>)
    //         const textElement = screen.getByText('Hello Vishal');
    //         expect(textElement).toBeInTheDocument();
    //     })
        
    // })
})