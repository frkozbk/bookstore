import React, { Component } from 'react'
import _ from "lodash"
import Navbar from './Navbar'
class Anasayfa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            search: '',
            sayfano: 1,
            maxpage: null,
        }
    }

    componentDidMount() {

        this.search()
    }
    onChange = (e) => {
        console.log("onChange")
        let input = e.target.value
        this.setState({ search: input, sayfano: 1 }, () => {
            this.search(input)
        })

    }

    search = (input) => {
        console.log(this.state.sayfano)
        let url = `http://localhost:5000/book?q=${this.state.search}&_page=${this.state.sayfano}&_limit=10`
        fetch(url)
            .then(resp => {
                this.setState({ maxpage: Math.round(resp.headers.get("X-Total-Count") / 10 + 1) })
                return resp.json()
            })
            .then(dat => {

                console.log(dat)
                console.log("search")
                this.setState({ data: dat })
            })
            .catch(err => console.log(err))
    }

    descrease = () => {

        const sayfano = this.state.sayfano - 1;

        if (this.state.sayfano !== 1) {

            this.setState({ sayfano }, () => {
                this.search()
            });


        }



    }
    increase = () => {

        const sayfano = this.state.sayfano + 1;

        this.setState({ sayfano: sayfano }, () => {
            this.search()
        });


    }

    render() {
        const increase = (
            <button onClick={this.increase} className="btn btn-primary">Sonraki Sayfa</button>
        )
        const decrease = (
            <button onClick={this.descrease} className="btn btn-primary m-5 right">Önceki Sayfa</button>
        )
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Ozbek Kitapevi</h1>
                        </div>
                        <div className="col-m-3 mb-2 ml-5 right">
                            <input
                                className="form-control "
                                placeholder="Arama Yapın"
                                type="text"
                                onChange={this.onChange}
                                value={this.state.search} />

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
                            {this.state.sayfano !== 1 ? decrease : null}
                            {this.state.maxpage > this.state.sayfano ? increase : null}


                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Anasayfa

