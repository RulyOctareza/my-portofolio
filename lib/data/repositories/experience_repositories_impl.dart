
import 'package:my_portofolio/domain/entites/experience.dart';
import 'package:my_portofolio/domain/repository/experience_repository.dart';

class ExperienceRepositoryImpl implements ExperienceRepository {
  @override
  List<Experience> getExperiences() {
    // In a real app, this would come from an API or database
    return [
      Experience(
        company: 'Tech Innovations Inc.',
        position: 'Senior Flutter Developer',
        duration: 'Jan 2022 - Present',
        description:
            'Leading the development of multiple mobile applications using Flutter. Responsible for architecture design, code reviews, and mentoring junior developers. Implemented clean architecture principles and state management solutions.',
        technologies: [
          'Flutter',
          'Dart',
          'Firebase',
          'GetX',
          'Clean Architecture',
        ],
        logoUrl: 'assets/images/tech_innovations.png',
        isCurrent: true,
      ),
      Experience(
        company: 'Mobile Solutions Ltd.',
        position: 'Flutter Developer',
        duration: 'Mar 2020 - Dec 2021',
        description:
            'Developed and maintained several mobile applications for clients in various industries. Worked on implementing responsive UI designs, integrating RESTful APIs, and optimizing app performance.',
        technologies: ['Flutter', 'Dart', 'REST API', 'BLoC', 'SQLite'],
        logoUrl: 'assets/images/mobile_solutions.png',
      ),
      Experience(
        company: 'Creative Apps Studio',
        position: 'Junior Mobile Developer',
        duration: 'Jun 2018 - Feb 2020',
        description:
            'Started as a junior developer working on both Android and iOS applications. Gradually transitioned to Flutter development. Assisted in UI implementation and bug fixing.',
        technologies: ['Flutter', 'Android', 'iOS', 'Java', 'Swift'],
        logoUrl: 'assets/images/creative_apps.png',
      ),
    ];
  }
}
