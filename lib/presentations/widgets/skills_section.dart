import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:dots_indicator/dots_indicator.dart';

class SkillsSection extends StatefulWidget {
  const SkillsSection({super.key});

  @override
  _SkillsSectionState createState() => _SkillsSectionState();
}

class _SkillsSectionState extends State<SkillsSection> {
  final List<Map<String, dynamic>> skills = const [
    {'name': 'Flutter', 'image': 'assets/icons/ic_flutter.webp'},
    {'name': 'Dart', 'image': 'assets/icons/ic_dart.webp'},
    {'name': 'Firebase', 'image': 'assets/icons/ic_firebase.webp'},
    {'name': 'Postman', 'image': 'assets/icons/ic_postman.webp'},
    {'name': 'BLOC', 'image': 'assets/icons/ic_bloc.webp'},
    {'name': 'GetX', 'image': 'assets/icons/ic_getx.webp'},
    {'name': 'Figma', 'image': 'assets/icons/ic_figma.webp'},
    {'name': 'Git', 'image': 'assets/icons/ic_git.webp'},
    {'name': 'Visual Studio Code', 'image': 'assets/icons/ic_vs_code.webp'},
    {'name': 'Agile', 'image': 'assets/icons/ic_adaptibility.webp'},
  ];

  int _currentPage = 0;
  final PageController _pageController = PageController(viewportFraction: 0.7);

  @override
  Widget build(BuildContext context) {
    bool isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Container(
      padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text(
            'Skills',
            style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 32),
          isMobile ? _buildCarouselLayout() : _buildGridLayout(),
        ],
      ),
    );
  }

  /// **📱 Mobile & Tablet: Tampilan Carousel**
  Widget _buildCarouselLayout() {
    return Column(
      children: [
        SizedBox(
          height: 160,
          child: PageView.builder(
            controller: _pageController,
            itemCount: skills.length,
            onPageChanged: (index) {
              setState(() => _currentPage = index);
            },
            itemBuilder: (context, index) {
              return Transform.scale(
                scale: _currentPage == index ? 1.1 : 0.9,
                child: _buildSkillItem(skills[index], 120),
              );
            },
          ),
        ),
        const SizedBox(height: 16),
        DotsIndicator(
          dotsCount: skills.length,
          position: _currentPage.toDouble(),
          decorator: DotsDecorator(
            activeColor: Colors.blue,
            size: const Size(8, 8),
            activeSize: const Size(16, 8),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(4),
            ),
          ),
        ),
      ],
    );
  }

  /// **🖥 Desktop: Tampilan Grid**
  Widget _buildGridLayout() {
    return Wrap(
      alignment: WrapAlignment.center,
      spacing: 24,
      runSpacing: 24,
      children: skills.map((skill) => _buildSkillItem(skill, 100)).toList(),
    );
  }

  /// **🎨 Widget Skill Item**
  Widget _buildSkillItem(Map<String, dynamic> skill, double size) {
    return Column(
      children: [
        Container(
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(12)),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: Image.asset(
              skill['image'],
              height: size,
              width: size,
              fit: BoxFit.contain,
              errorBuilder: (context, error, stackTrace) {
                return Container(
                  height: size,
                  width: size,
                  color: Colors.grey.shade200,
                  child: Center(
                    child: Text(
                      skill['name'],
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        color: Colors.grey,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
        ),
        const SizedBox(height: 12),
        Text(
          skill['name'],
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
        ),
      ],
    );
  }
}
