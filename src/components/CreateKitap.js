import React, { Component } from 'react'
import Navbar from './Navbar'
class CreateKitap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kitapismi: '',
            yazar: '',
            yayınevi: '',


        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        const data = {
            kitapismi: this.state.kitapismi,
            yazar: this.state.yazar,
            yayınevi: this.state.yayınevi
        }
        fetch('http://localhost:5000/book', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => console.log(res));
    }
    render() {
        return (
            <div>
                <Navbar />
                <section id="cover">
                    <div id="cover-caption">
                        <div id="container" class="container">
                            <div className="row ">
                                <div className="col-sm-6 offset-sm-3 text-center">
                                    <h1 className="display-4">Yeni Kitap Ekle</h1>
                                    <div className="info-form">
                                        <form onSubmit={this.onSubmit} class="form-inlin justify-content-center">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Kitap İsmi"
                                                    name="kitapismi"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Yazarın İsmi"
                                                    name="yazar"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Yayınevi İsmi"
                                                    name="yayınevi"
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-success ">Kaydet</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
export default CreateKitap