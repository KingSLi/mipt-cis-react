import React, { Component } from 'react'
import { Octokit } from "@octokit/core";
import { Typography } from 'antd';
require('dotenv').config();

export class AboutPage extends Component {
    constructor(props) {
        super(props)

        this.loadGithubInfo('KingSLi')
        this.state = {}
    }

    loadGithubInfo(username) {
        const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_KEY });
        octokit.request(`GET /users/${username}`).then(
            result => {
                let data = result.data
                this.setState({
                    avatar_url: data['avatar_url'],
                    login: data['login'],
                    bio: data['bio'],
                    name: data['name'],
                    url: data['html_url']
                })
            }
        )

    }

    render() {
        let block_info = null
        if (this.state.avatar_url) {
            block_info = (
                <div class='info-holder'>
                    <Typography.Paragraph>Login: {this.state.login}</Typography.Paragraph>
                    <Typography.Paragraph>Username: {this.state.name}</Typography.Paragraph>
                    <Typography.Paragraph>Bio: {this.state.bio}</Typography.Paragraph>
                    <Typography.Paragraph>Более подробно смотрите <a href={this.state.url} target="_blank">тут</a></Typography.Paragraph>
                    <img class='profile-image' src={this.state.avatar_url} alt="profile"/>
                </div>
            )
        }
        
        return (
            <div>                
                <Typography.Title >Здесь вы можете узнать информацию о создателе!</Typography.Title>
                <Typography.Paragraph>Конечно же о создателе этого замечательного сайта)</Typography.Paragraph>
                { block_info }
            </div>
        )
    }
}
