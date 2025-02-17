import { render } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it ("Should render Body Component with search", async ()=>{
    //await act( async ()=> render(<BrowserRouter><Body /></BrowserRouter>));
   render(<Body />);
    

});