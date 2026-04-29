pipeline {
    agent any

    stages {

        stage('TEST') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('BUILD') {
            steps {
                bat 'npm install'
            }
        }

        stage('DOCKER IMAGE') {
            steps {
                bat 'docker build -t node-demo-app .'
            }
        }

        stage('REMOVE OLD CONTAINER') {
            steps {
                bat 'docker rm -f node-demo-container || exit 0'
            }
        }

        stage('RUN CONTAINER') {
            steps {
                bat 'docker run -d -p 3000:3000 --name node-demo-container node-demo-app'
            }
        }
    }
}
