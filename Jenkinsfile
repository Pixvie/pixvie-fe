pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build.'
                sh 'docker rm pixvie-frontend --force'
                sh 'docker build -t pixvie-fe .'
                sh 'docker run --name pixvie-frontend --env VUE_APP_API_SERVER=$VUE_APP_API_SERVER -d -p 80:80 pixvie-fe'
                
            }
        }
    }
}
