export class LaunchStory {
  constructor ({
        description = '',
        location = '',
        mission = '',
        rocket = '',
        time = new Date() } = {}) {
    this.description = description
    this.location = location
    this.mission = mission
    this.rocket = rocket
    this.time = time
  }
}
