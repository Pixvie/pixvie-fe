pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build.'
                sh 'docker rm pixvie-frontend --force'
                sh 'docker build --build-arg VUE_APP_API_SERVER=$VUE_APP_API_SERVER -t pixvie-fe .'
                sh 'docker run --name pixvie-frontend -d -p 80:80 pixvie-fe'
                
            }
        }
    }
}
