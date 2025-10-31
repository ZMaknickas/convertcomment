import { useState, useEffect } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  function fetchComments() {
    fetch("http://localhost:5527/api/forms")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setComments(data.data);
        } else {
          console.error("Failed to load comments");
        }
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }

     const handleDelete = async (id) => {

    try {
      const res = await fetch(`http://localhost:5527/api/forms/${id}`, 
      { method: "DELETE" });

      const result = await res.json();

      if (res.ok) {
        // Remove deleted comment from state
        setComments((prev) => prev.filter((c) => c.id !== id));
      } else {
        alert(result.message || "Nepavyko ištrinti komentaro.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Klaida trinant komentarą.");
    }
  };


  function handleFormSubmit(e) {
    e.preventDefault();

    const payload = { name, comment };

    fetch("http://localhost:5527/api/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        setName("");
        setComment("");
        fetchComments();
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
      });
  }

  return (
  <div className="container py-5" style={{ maxWidth: "600px" }}>
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-body">
        <h3 className="card-title text-center mb-4 text-primary">
          Palikite komentarą
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Vardas (Name)
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="comment" className="form-label fw-semibold">
              Komentaras (Comment)
            </label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className="form-control"
              id="comment"
              rows={3}
              required
            />
          </div>
          
          <div>
          <button className="btn btn-sm btn-warning mt-4" type="submit">
            Siųsti
          </button>
          </div>
        </form>
      </div>
    </div>

    <div className="comments-section">
      <h4 className="mb-3 text-secondary">Visi komentarai</h4>
      {comments.length === 0 ? (
        <p className="text-muted">Nėra komentarų.</p>
      ) : (
        <ul className="list-group">
          {comments.map((c) => (
            <li
              key={c.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div>
                <strong>{c.name}</strong>
                <p className="mb-0">{c.comment}</p>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(c.id)}
              >
                Ištrinti
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
}
