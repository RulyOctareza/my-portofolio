class Project {
  final String title;
  final String description;
  final String imageUrl;
  final String? githubUrl;
  final String? liveUrl;
  final List<String> technologies;

  Project({
    required this.title,
    required this.description,
    required this.imageUrl,
    this.githubUrl,
    this.liveUrl,
    required this.technologies,
  });
}
