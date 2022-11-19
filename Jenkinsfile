pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build.'
                sh 'yarn install'
                sh 'yarn build'
            }
        }
    }
}