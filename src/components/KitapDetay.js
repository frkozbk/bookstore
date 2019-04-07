import React, { Component } from 'react'
import Navbar from './Navbar'
import _ from 'lodash'

export default class KitapDetay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        let url = `http://localhost:5000/book?q=${id}`
        fetch(url)
            .then(resp => resp.json())
            .then(dat => {
                this.setState({ data: dat })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (

            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Ozbek Kitapevi</h1>
                        </div>

                        <div className="col-md-12">




                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>

                                        <th scope="col" >Kitap İsmi</th>
                                        <th scope="col">Yazar İsmi</th>
                                        <th scope="col">Yayınevi</th>


                                    </tr>

                                </thead>
                                <tbody>
                                    {_.isEmpty(this.state.data) ? "Sonuç Bulunamadı" : this.state.data.map(kitap => {
                                        return (
                                            <tr key={kitap.id}>

                                                <td>{_.upperFirst(kitap.kitapismi)}</td>
                                                <td>{_.upperFirst(kitap.yayınevi)}</td>
                                                <td>{_.upperFirst(kitap.yayınevi)}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>



                            </table>



                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
