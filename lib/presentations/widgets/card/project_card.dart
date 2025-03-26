import 'package:flutter/material.dart';
import 'package:my_portofolio/domain/entites/project.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjectCard extends StatelessWidget {
  final Project project;

  const ProjectCard({super.key, required this.project});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveBreakpoints.of(context).smallerThan(TABLET);

    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      color: Theme.of(context).cardTheme.color,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(16),
              topRight: Radius.circular(16),
            ),
            child: Image.network(
              project.imageUrl.startsWith('assets/')
                  ? 'https://via.placeholder.com/400x200'
                  : project.imageUrl,
              height: isMobile ? 140 : 180,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          Expanded(
            child: Padding(
              padding: EdgeInsets.all(isMobile ? 12 : 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    project.title,
                    style: Theme.of(context).textTheme.titleLarge,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 8),
                  Expanded(
                    child: Text(
                      project.description,
                      style: Theme.of(context).textTheme.bodyMedium,
                      maxLines: isMobile ? 2 : 3,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                  const SizedBox(height: 8),
                  SizedBox(
                    height: 32,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      children:
                          project.technologies.map((tech) {
                            return Padding(
                              padding: const EdgeInsets.only(right: 8),
                              child: Chip(
                                label: Text(
                                  tech,
                                  style: TextStyle(
                                    fontSize: isMobile ? 10 : 12,
                                    color: Theme.of(context).primaryColor,
                                  ),
                                ),
                                backgroundColor: Theme.of(
                                  context,
                                ).primaryColor.withOpacity(0.1),
                                padding: EdgeInsets.zero,
                                materialTapTargetSize:
                                    MaterialTapTargetSize.shrinkWrap,
                                labelPadding: EdgeInsets.symmetric(
                                  horizontal: isMobile ? 4 : 8,
                                  vertical: 0,
                                ),
                              ),
                            );
                          }).toList(),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      if (project.githubUrl != null)
                        IconButton(
                          icon: Icon(
                            Icons.code,
                            size: 20,
                            color: Theme.of(context).iconTheme.color,
                          ),
                          onPressed: () => _launchUrl(project.githubUrl!),
                          tooltip: 'View Code',
                          constraints: BoxConstraints.tightFor(
                            width: isMobile ? 32 : 40,
                            height: isMobile ? 32 : 40,
                          ),
                          padding: EdgeInsets.zero,
                        ),
                      if (project.liveUrl != null)
                        IconButton(
                          icon: Icon(
                            Icons.launch,
                            size: 20,
                            color: Theme.of(context).iconTheme.color,
                          ),
                          onPressed: () => _launchUrl(project.liveUrl!),
                          tooltip: 'Live Demo',
                          constraints: BoxConstraints.tightFor(
                            width: isMobile ? 32 : 40,
                            height: isMobile ? 32 : 40,
                          ),
                          padding: EdgeInsets.zero,
                        ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _launchUrl(String url) async {
    if (!await launchUrl(Uri.parse(url))) {
      throw Exception('Could not launch $url');
    }
  }
}
