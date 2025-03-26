import 'package:my_portofolio/domain/entites/experience.dart';
import 'package:my_portofolio/domain/repository/experience_repository.dart';

class ExperienceRepositoryImpl implements ExperienceRepository {
  @override
  List<Experience> getExperiences() {
    // In a real app, this would come from an API or database
    return [
      Experience(
        company: 'Namdo Mold. Co.Ltd',
        position: 'Material Handler',
        duration: 'Apr 2019 - Dec 2024',
        description:
            'Responsible for the efficient transportation, storage, and distribution of raw materials, semi-finished, and finished plastic products within the production area. Operates forklifts, hand pallets, and vacuum loaders to ensure a smooth material flow to injection molding machines. Maintains inventory accuracy, ensures timely material supply, and follows safety regulations to support uninterrupted production.',
        technologies: [
          'Forklift',
          'Crane',
          'Molding Machine',
          'Mathematic',
          'Injection Machine',
        ],
        logoUrl: 'assets/images/tech_innovations.png',
      ),
      Experience(
        company: 'KMI Korea Selatan',
        position: 'Flutter Developer',
        duration: 'Jun 2024 - Aug 2024',
        description:
            'Developed MasjidKorea, a mobile application built with Flutter and Firebase to help Muslims in South Korea find nearby mosques. Designed and implemented location-based search features, integrated real-time database for mosque information, and optimized the user interface for a seamless experience. Responsible for full-stack development, including UI/UX design, API integration, and performance optimization.',
        technologies: ['Flutter', 'Dart', 'REST API', 'BLoC', 'SQLite'],
        logoUrl: 'assets/images/mobile_solutions.png',
      ),
    ];
  }
}
