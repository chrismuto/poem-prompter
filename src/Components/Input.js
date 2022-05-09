import { useState } from "react";

export default function Input() {
    const [formState, setFormState] = useState({
        inputText: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            requestPoem({ variables: {...formState} });
        } catch (err) {
            console.error(err);
            alert("an error has occurred, please try again");
        }
        setFormState({inputText: ""})
    }
    const requestPoem = (data) => {
        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.local.API_KEY}`,
        },
        body: JSON.stringify(data),
       });
    }
    return (
        <div className="d-flex justify-content-center">
            <textarea type="text" className="col-9" placeholder="Enter a prompt!" id="inputField"
            // value={this.state.value} onChange={this.handleChange}
            />
        </div>
    );
}