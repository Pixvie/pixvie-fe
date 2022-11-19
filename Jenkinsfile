pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build.'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}