import axios from "axios";
import { useState } from "react";

export default function PostMenu() {

    const [menus, setMenus] = useState([]);
    const [inputText, setInputText] = useState({

        restaurant: "",
        name: "",
        price: "",
        type: "",
        taste: ""
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setInputText({ ...inputText, [name]: value });
    }

    const insertMenu = (e) => {
        e.preventDefault();
        console.log(inputText);
        setMenus([...menus, inputText]);


        axios.post("/springboot/menu", inputText)
            .then(Response => setMenus(Response.data));


        // proxy 사용하지 않고 등록되는 기능 추가하기
        // axios.post("http://localhost:3000/springboot/menu", inputText)
        //     .then(function (Response) {
        //         const { msg } = Response.data;
        //         alert(msg);
        //     })
        //     .catch(console.log)
        //     .finally(
        //         function () {
        //             setInputText({
        //                 restaurant: "",
        //                 name: "",
        //                 price: "",
        //                 type: "",
        //                 taste: ""
        //             })
        //             e.target.reset();
        //         })
    }

    return (
        <>
            <div className="menu-test">
                <h4>메뉴 등록하기(POST)</h4>
                <form id="menuEnrollFrm" onSubmit={insertMenu} >
                    <input type="text" name="restaurant" placeholder="음식점" className="form-control" onChange={handleInputChange} value={inputText.restaurant} />
                    <br />
                    <input type="text" name="name" placeholder="메뉴" className="form-control" onChange={handleInputChange} value={inputText.name} />
                    <br />
                    <input type="number" name="price" placeholder="가격" className="form-control" onChange={handleInputChange} value={inputText.price} />
                    <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="type" id="post-kr" value="kr" onChange={handleInputChange} />
                        <label htmlFor="post-kr" className="form-check-label">한식</label>&nbsp;
                        <input type="radio" className="form-check-input" name="type" id="post-ch" value="ch" onChange={handleInputChange} />
                        <label htmlFor="post-ch" className="form-check-label">중식</label>&nbsp;
                        <input type="radio" className="form-check-input" name="type" id="post-jp" value="jp" onChange={handleInputChange} />
                        <label htmlFor="post-jp" className="form-check-label">일식</label>&nbsp;
                    </div>
                    <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="taste" id="post-hot" value="hot" onChange={handleInputChange} />
                        <label htmlFor="post-hot" className="form-check-label">매운맛</label>&nbsp;
                        <input type="radio" className="form-check-input" name="taste" id="post-mild" value="mild" onChange={handleInputChange} />
                        <label htmlFor="post-mild" className="form-check-label">순한맛</label>
                    </div>
                    <br />
                    <input type="submit" className="btn btn-block btn-outline-success btn-send" value="등록" />
                </form>
            </div>
        </>
    )
}