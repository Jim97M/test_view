pipeline
{
   agent any
   tools
   {
      maven "MAVEN_HOME"
   }
   stages {
      stage('Build') {
        steps {
          //Get Code From Github
          git 'https://github.com/Jim97M/test_view.git'

          //Run Maven on a Unix Agent
          sh "mvn -Dmaven.test.failure.ignore=true clean package"

        }
      post {
        success{
          archiveArtifacts 'target/*.jar'
        }
      }
      }
   }
}

