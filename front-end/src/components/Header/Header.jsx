import React, { useState } from 'react'

export default function Header({ onSearch, resetDatasource }) {
    const [search, setSearch] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()

        onSearch(search)
    }

    const onSearchChanged = (event) => {
        setSearch(event.target.value)
    }

    const resetForm = () => {
        setSearch('')
        resetDatasource()
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">
                    Bookshelf
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0" onSubmit={onFormSubmit}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={onSearchChanged} value={search} />
                        <button
                            className={"btn my-2 my-sm-0 " + (search ? "btn-outline-success" : "btn-outline-secondary")}
                            disabled={search ? false : true}
                            onClick={resetForm}
                            type="reset"
                        >
                            Reset
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    )
}
