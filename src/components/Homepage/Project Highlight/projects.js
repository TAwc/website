import React from 'react';
import styles from './projects.module.css'
import {Link} from 'react-router-dom'

import { Table, Button,} from 'reactstrap';



const Projects = () =>  {

  
    const projetcs = [
                {
                  name: "messaging-service", 
                  desc: "A simple messaging service made for a class", 
                  repo: "https://github.com/A-Waters/messaging-service",
                  type: "github"
                },
                {
                  name: "Campus-AStar-pathing", 
                  desc: "A simple A* Node Based Pathing system for my college's campus.", 
                  repo: "https://github.com/A-Waters/Campus-AStar-pathing",
                  type: "github"
                },
                {
                  name: "Snake-Game", 
                  desc: 'A Simple Snake Game, I am going to use this in the future for a simple neural net, my first "finished" gui project', 
                  repo: "https://github.com/A-Waters/Snake-Game",
                  type: "github"
                },
  
                ]


    return (
      <span>
        <div className={styles.main}>
          <div className={styles.sectionContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>Project Highlights</p>
            </div>
            <div className={styles.descContainer}>
              <p className={styles.descText}>A few of my notable projects</p>
            </div>
            <div className={styles.projetcListContainer}>
              <Table hover size="sm"> 
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Repo</th>
                  </tr>
                </thead>
                <tbody>


                  {
                    projetcs.map((project)=>{
                      return (
                        <tr key={project.name}>
                          <td>{project.name}</td>
                          <td>{project.desc}</td>
                          <td><a href={project.repo}>{project.type}</a></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </div>
            <div className = {styles.seeMoreContainer}>
                <Button outline color="info" tag={Link} to={process.env.PUBLIC_URL + "/projects"} onClick={()=>{window.scrollTo(0, 0)}}>See More</Button>
            </div>
          </div>
        </div>
      </span>
    );
}

export default Projects;
