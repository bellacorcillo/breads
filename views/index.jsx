const React = require('react')
const Default = require('./layouts/Default')

function Index({ breads, bakers, title }) {
    return (
        <Default>
            <h2>We got bread!</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker) => {
                        return (<li key={baker._id}>
                            <a href={`/bakers/${baker._id}`}>
                                {baker.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>


            <h3>Breads</h3>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (<li key={bread._id}>
                            <a href={`/breads/${bread._id}`}>
                                {bread.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>

            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>

        </Default>

    )
}


module.exports = Index

