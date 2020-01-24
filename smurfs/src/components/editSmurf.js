{editing && (
    <form onSubmit={sEdit}>
        <legend>edit smurf</legend>
        <label>
        Name:
        <input
            onChange={e =>
            setSmurfEdit({ ...smurfEdit, Name: e.target.value })
            }
            value={smurfEdit.smurf.name}
        />
        </label>

        <label>
        Age:
        <input
            onChange={e =>
                setSmurfEdit({
                ...smurfEdit,
                Age: e.target.value 
            })
            }
            value={smurfEdit.smurf.age}
        />
        </label>

        <label>
        Height:
        <input
            onChange={e =>
                setSmurfEdit({
                ...smurfEdit,
                Height: e.target.value 
            })
            }
            value={smurfEdit.smurf.height}
        />
        </label>

        <div className="button-row">
        <button type="submit">save</button>
        <button onClick={() => setEditing(false)}>cancel</button>
        </div>
    </form>
)}