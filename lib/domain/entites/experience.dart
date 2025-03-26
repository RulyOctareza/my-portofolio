class Experience {
  final String company;
  final String position;
  final String duration;
  final String description;
  final List<String> technologies;
  final String logoUrl;
  final bool isCurrent;

  Experience({
    required this.company,
    required this.position,
    required this.duration,
    required this.description,
    required this.technologies,
    required this.logoUrl,
    this.isCurrent = false,
  });
}
