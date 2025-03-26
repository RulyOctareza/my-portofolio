import 'package:my_portofolio/domain/entites/project.dart';
import 'package:my_portofolio/domain/repository/project_repository.dart';

class ProjectRepositoryImpl implements ProjectRepository {
  @override
  List<Project> getProjects() {
    return [
      Project(
        title: 'Masjid Korea Apps',
        description:
            'Apps can Find Masjid around User with Harvesine Formula and Firebase Cloud Storage',
        imageUrl: 'assets/images/masjidkorea.png',
        githubUrl: 'https://github.com/RulyOctareza/new_masjid_korea',
        liveUrl: 'https://masjidkorea.com',
        technologies: [
          'Flutter',
          'Firebase Cloud Storage',
          'Firestore',
          'Figma',
          'BLOC',
        ],
      ),
      Project(
        title: 'Weather Apps',
        description:
            'Weather apps with Presision Location using GPS from Smartphone, Real-time weather forecasting app with beautiful UI and animations.',
        imageUrl: 'assets/images/weather_app.png',
        githubUrl: 'https://github.com/RulyOctareza/weather-app-bloc',
        liveUrl: '',
        technologies: ['Flutter', 'BLOC', 'Dart', 'OpenWeather API'],
      ),
      Project(
        title: 'Newsify',
        description:
            'The app displays news from the NewsAPI.org API, which is available for free.',
        imageUrl: 'assets/images/newsify2.png',
        githubUrl: 'https://github.com/RulyOctareza/Newsify',
        liveUrl: '',
        technologies: [
          'Flutter',
          'SQLite',
          'GetX',
          'News API',
          'Figma',
          'Shared Preferences',
          'Lottie Animation',
          'Firebase Auth',
        ],
      ),
      Project(
        title: 'Restaurants List Apps',
        description:
            'Restaurant List apps from API DICODING Indonesia during Submission Learning Path Multiplatform apps.',
        imageUrl: 'assets/images/dicoding.png',
        githubUrl: 'https://github.com/RulyOctareza/restaurant_app_dicoding',
        technologies: ['Flutter', 'Dicoding API', 'Bloc', 'Provider'],
      ),
    ];
  }
}
