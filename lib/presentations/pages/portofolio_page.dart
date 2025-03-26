import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_portofolio/presentations/controllers/navigation_controller.dart';
import 'package:my_portofolio/presentations/controllers/project_controller.dart';
import 'package:my_portofolio/presentations/widgets/about_section.dart';
import 'package:my_portofolio/presentations/widgets/contact_section.dart';
import 'package:my_portofolio/presentations/widgets/experience_section.dart';
import 'package:my_portofolio/presentations/widgets/header_section.dart';
import 'package:my_portofolio/presentations/widgets/project_carousel.dart';
import 'package:my_portofolio/presentations/widgets/skills_section.dart';
import 'package:responsive_framework/responsive_framework.dart';

class PortfolioPage extends StatefulWidget {
  const PortfolioPage({super.key});

  @override
  State<PortfolioPage> createState() => _PortfolioPageState();
}

class _PortfolioPageState extends State<PortfolioPage> {
  final NavigationController navigationController =
      Get.find<NavigationController>();
  late ProjectController projectController;

  @override
  void initState() {
    super.initState();
    // Initialize the project controller
    projectController = Get.put(ProjectController());
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Scaffold(
      body: SafeArea(
        child: ResponsiveBreakpoints.builder(
          breakpoints: [
            const Breakpoint(start: 0, end: 450, name: MOBILE),
            const Breakpoint(start: 451, end: 800, name: TABLET),
            const Breakpoint(start: 801, end: 1920, name: DESKTOP),
            const Breakpoint(start: 1921, end: double.infinity, name: '4K'),
          ],
          child: CustomScrollView(
            controller: navigationController.scrollController,
            slivers: [
              // Header section
              SliverToBoxAdapter(
                child: Header(
                  onMenuTap: (String section) {
                    navigationController.scrollToSection(section);
                  },
                ),
              ),

              // About section
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.all(isMobile ? 12.0 : 16.0),
                  child: AboutSection(key: navigationController.aboutKey),
                ),
              ),

              // Skills section
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.all(isMobile ? 12.0 : 16.0),
                  child: SkillsSection(key: navigationController.skillsKey),
                ),
              ),

              // Experience section (new)
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.all(isMobile ? 12.0 : 16.0),
                  child: ExperienceSection(
                    key: navigationController.experienceKey,
                  ),
                ),
              ),

              // Projects section
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.all(isMobile ? 12.0 : 16.0),
                  child: Column(
                    key: navigationController.projectsKey,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      const Text(
                        'Projects',
                        style: TextStyle(
                          fontSize: 28,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 24),
                      ProjectsCarousel(controller: projectController),
                    ],
                  ),
                ),
              ),

              // Contact section
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.all(isMobile ? 12.0 : 16.0),
                  child: ContactSection(key: navigationController.contactKey),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
