

export default function FirstForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            first: event.target.first.value,
            last: event.target.last.value,
        }
        const JSONdata = JSON.stringify(data);
        const response = await fetch('/api/form', {
            body: JSONdata,
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        const result = await response.json();
        alert(`Is this your full name: ${result.data}`)
    }

    return (
        <div className="form-body">
            <h1>The first Form Component goes here</h1>
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" name="first" required />
            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" name="last" required />

            <button type="submit">Submit</button>
            </form>
      </div>
      </div>
    )
}